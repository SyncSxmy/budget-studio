const CACHE='budget-studio-offline-v9-2-gastro-gutachter';
const ASSETS=['./index.html','./style.css?v=092b','./app.js?v=092b','./business-extra.js?v=092b','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('budget-studio-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request,url=new URL(req.url);if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match('./index.html')));return;}
 if(/\/(app\.js|business-extra\.js|style\.css)$/.test(url.pathname)){event.respondWith(fetch(req).then(response=>{if(response.ok){const clone=response.clone();caches.open(CACHE).then(cache=>cache.put(req,clone)).catch(()=>{});}return response}).catch(()=>caches.match(req)));return;}
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
});
