// Inimai Bakes admin app – service worker. Only this folder's own files are cached (network first).
// Orders, prices and PIN checks go straight to Google; nothing from them is stored here.
var CACHE = 'inimai-admin-v1';
var CORE = ['./', 'index.html', 'manifest.webmanifest', '../icon-192.png', '../icon-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('inimai-admin-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req).then(function (res) {
    if (res && res.ok && res.type === 'basic') { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () { return caches.match(req, {ignoreSearch: true}).then(function (h) { return h || caches.match('./'); }); }));
});
