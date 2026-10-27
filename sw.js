const CACHE='budget-studio-offline-v9-9a-ai';
const ASSETS=['./index.html','./style.css?v=099a','./app.js?v=099a','./crypto-extra.js?v=099a','./auth-extra.js?v=099a','./sync-extra.js?v=099a','./media-extra.js?v=099a','./business-extra.js?v=099a','./finance-engine.js?v=099a','./tool-planner.js?v=099a','./home-tools.js?v=099a','./orders-extra.js?v=099a','./ai-helper.js?v=099a','./ai-helper.css?v=099a','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('budget-studio-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request,url=new URL(req.url);if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match('./index.html')));return;}
 if(/\/(app\.js|sync-extra\.js|crypto-extra\.js|media-extra\.js|business-extra\.js|orders-extra\.js|tool-planner\.js|home-tools\.js|finance-engine\.js|ai-helper\.js|ai-helper\.css|style\.css)$/.test(url.pathname)){event.respondWith(fetch(req).then(response=>{if(response.ok){const clone=response.clone();caches.open(CACHE).then(cache=>cache.put(req,clone)).catch(()=>{});}return response}).catch(()=>caches.match(req)));return;}
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
});
