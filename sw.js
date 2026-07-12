const CACHE_NAME = 'office-ops-launcher-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only cache the launcher shell itself — never intercept navigation to the
  // actual Apps Script app, so Google's login flow always works normally.
  if (!event.request.url.includes(self.location.origin)) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
