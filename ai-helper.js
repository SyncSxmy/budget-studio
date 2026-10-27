/* Budget Studio – KI-Helfer 0.9.9 (Web-Beta)
 * Never stores conversation in localStorage or sync. No automatic access to finances or photos.
 */
(()=>{
'use strict';
const URL='https://octimjkrwiueowppivph.supabase.co/functions/v1/budget-studio-ai';
const PUBLIC_KEY='sb_publishable_RAA36s60nKKc5tKJbK4nCA_B3jE7lEy';
const TRADES=[['general','Allgemein'],['masonry','Maurer / Hochbau'],['civil','Tiefbau'],['electrical','Elektrotechnik'],['paint','Maler / Lackierer'],['tiling','Fliesenleger'],['drywall','Trockenbau'],['concrete','Betonbau'],['plumbing','SHK / Sanitär'],['roofing','Dachdecker'],['landscape','Garten- und Landschaftsbau'],['gastronomy','Gastronomie'],['assessor','Kfz-Gutachter']];
const ids=new Set(TRADES.map(x=>x[0]));
const $=id=>document.getElementById(id);
const button=$('bs-ai-launch'),panel=$('bs-ai-panel'),conversation=$('bs-ai-messages'),field=$('bs-ai-question'),send=$('bs-ai-send'),form=$('bs-ai-form'),modeArea=$('bs-ai-modes'),tradeSelect=$('bs-ai-trade'),tradeArea=$('bs-ai-trade-area'),suggestions=$('bs-ai-prompts'),notice=$('bs-ai-status'),consent=$('bs-ai-consent'),topicLabel=$('bs-ai-selected');
if(!button||!panel)return;
let mode='app',trade='general',history=[],busy=false,lastHousehold=null,activeController=null;
function context(){try{return window.BudgetStudioAIContext?.get?.()||{locked:true};}catch{return {locked:true};}}
function tell(message,isError=false){notice.textContent=message||'';notice.hidden=!message;notice.classList.toggle('error',isError);}
function append(role,text){const item=document.createElement('div');item.className='bs-ai-msg bs-ai-'+role;const head=document.createElement('strong');head.textContent=role==='user'?'Du':role==='error'?'Hinweis':'KI-Helfer';const para=document.createElement('p');para.textContent=text;item.append(head,para);conversation.append(item);conversation.scrollTop=conversation.scrollHeight;}
function welcome(){conversation.replaceChildren();append('assistant','Hallo! Ich helfe dir bei der App und bei Fachfragen für dein Gewerk. Was möchtest du wissen?');}
function clear(){history=[];welcome();tell('');}
function prompts(){
 if(mode==='app')return ['Wo finde ich meine Abos?','Wie nutze ich die Monatsansicht 15.–14.?','Wie erstelle ich einen Auftrag?'];
 if(['masonry','drywall','concrete'].includes(trade))return ['Welche Werkzeuge brauche ich für 20 m² KS-Mauerwerk?','Was muss ich bei einer Brandschutzwand beachten?','Wie schätze ich Mörtelbedarf ab?'];
 if(trade==='landscape')return ['Welche Werkzeuge brauche ich für 5 m² Rollrasen?','Wie bereite ich ein Pflasterbett vor?','Was brauche ich für eine Rasenkante?'];
 if(trade==='assessor')return ['Welche Fotos gehören zur Schadenakte?','Was gehört in eine Reparaturkalkulation?','Welche Kostenarten hat ein Unfallgutachten?'];
 return ['Welche Werkzeuge brauche ich für meinen Auftrag?','Welche Fehler sollte ich vermeiden?','Welche Arbeitsschritte sind üblich?'];
}
function drawMode(){
 for(const b of modeArea.querySelectorAll('button[data-mode]')){const active=b.dataset.mode===mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));}
 tradeArea.hidden=mode==='app';
 topicLabel.textContent=mode==='app'?'Fragen zur Bedienung von Budget Studio':'Fachbereich: '+(TRADES.find(x=>x[0]===trade)?.[1]||'Allgemein');
 suggestions.replaceChildren();for(const q of prompts()){const b=document.createElement('button');b.type='button';b.textContent=q;b.className='bs-ai-prompt';b.addEventListener('click',()=>{field.value=q;field.focus();});suggestions.append(b);}
}
function update(){const c=context();if(c.locked){button.hidden=true;panel.hidden=true;button.setAttribute('aria-expanded','false');return;}button.hidden=false;
 if(c.id!==lastHousehold){lastHousehold=c.id;trade=ids.has(c.focus)?c.focus:'general';tradeSelect.value=trade;clear();}
 drawMode();
}
function open(){update();if(button.hidden)return;panel.hidden=false;button.setAttribute('aria-expanded','true');field.focus();}
function close(){panel.hidden=true;button.setAttribute('aria-expanded','false');button.focus();}
function pending(v){busy=v;send.disabled=v;field.disabled=v;tradeSelect.disabled=v;modeArea.querySelectorAll('button').forEach(b=>b.disabled=v);send.textContent=v?'Warte …':'Senden';}
async function ask(question){
 if(busy)return;
 if(!consent.checked){tell('Bitte zuerst der Übermittlung deiner Frage zustimmen.',true);consent.focus();return;}
 if(!navigator.onLine){tell('Die KI benötigt eine Internetverbindung.',true);return;}
 if(!question || question.length>1600){tell('Bitte maximal 1.600 Zeichen eingeben.',true);return;}
 const c=context();if(c.locked){tell('Bitte zunächst deinen Haushalt auswählen und den Tresor entsperren.',true);return;}
 if(!window.BudgetStudioAuth?.getSessionForSync){tell('Bitte erst bei deinem Cloud-Konto anmelden.',true);return;}
 tell('');const previous=history.slice(-6);pending(true);append('user',question);
 try{
  const user=await window.BudgetStudioAuth.getSessionForSync();
  activeController=new AbortController();const timer=setTimeout(()=>activeController?.abort(),32000);
  let response;try{response=await fetch(URL,{method:'POST',headers:{'Authorization':'Bearer '+user.token,'apikey':PUBLIC_KEY,'Content-Type':'application/json'},body:JSON.stringify({question,history:previous,mode,trade,page:c.page}),signal:activeController.signal,cache:'no-store'});}finally{clearTimeout(timer);}
  const obj=await response.json().catch(()=>({}));
  if(!response.ok)throw Error(obj.error||`Server meldet HTTP ${response.status}.`);
  if(typeof obj.answer!=='string'||!obj.answer.trim())throw Error('Die KI hat keine Antwort gesendet.');
  append('assistant',obj.answer);
  history=[...previous,{role:'user',content:question},{role:'assistant',content:obj.answer.slice(0,1200)}].slice(-6);
  field.value='';
 }catch(e){
  const msg=e?.name==='AbortError'?'Die Antwort hat zu lange gedauert. Bitte nochmals versuchen.':(e?.message||String(e));
  append('error',msg);
  if(/anmeld|login/i.test(msg))tell('Öffne unter Mehr → Cloud-Konto (Beta) deine Anmeldung.',true);
 }finally{activeController=null;pending(false);field.focus();}
}
for(const [id,label] of TRADES){const opt=document.createElement('option');opt.value=id;opt.textContent=label;tradeSelect.add(opt);}
button.addEventListener('click',()=>panel.hidden?open():close());
$('bs-ai-close').addEventListener('click',close);
$('bs-ai-clear').addEventListener('click',()=>{if(!busy)clear();});
$('bs-ai-login').addEventListener('click',()=>window.BudgetStudioAuth?.open?.());
modeArea.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(!b||busy||!['app','expert'].includes(b.dataset.mode))return;if(mode!==b.dataset.mode){mode=b.dataset.mode;clear();}drawMode();});
tradeSelect.addEventListener('change',()=>{if(busy)return;const next=tradeSelect.value;if(!ids.has(next))return;
  const ok=window.BudgetStudioAIContext?.setFocus?.(next);if(!ok){tell('Fachbereich konnte nicht gespeichert werden.',true);return;}
  trade=next;clear();drawMode();});
form.addEventListener('submit',e=>{e.preventDefault();ask(field.value.trim());});
field.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();form.requestSubmit();}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){close();}});
window.BudgetStudioAssistant={open,contextChanged:update};
update();
})();
