const CACHE='budget-studio-offline-v8-0';
const ASSETS=['./index.html','./style.css?v=080','./app.js?v=080','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('budget-studio-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).catch(()=>caches.match('./index.html')));return;
 }
 const appAsset=/\/(app\.js|style\.css)$/.test(url.pathname);
 if(appAsset){
  event.respondWith(fetch(request).then(response=>{if(response.ok){const clone=response.clone();caches.open(CACHE).then(cache=>cache.put(request,clone)).catch(()=>{});}return response}).catch(()=>caches.match(request)));
  return;
 }
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
