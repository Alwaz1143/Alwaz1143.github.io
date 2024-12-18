const CACHE_NAME = "task-manager-v1";
const CACHE_URLS = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/icons/icon1.png",
  "/icons/icon2.png",
  "checked.png",
  "unchecked.png"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files...');
      return cache.addAll(CACHE_URLS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});