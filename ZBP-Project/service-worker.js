const CACHE_NAME = "zbp-project-v1";
const CACHE_URLS = [
  "/",
  "/index.html",
  "/style.css",
  "/header.css",
  "/footer.css",
  "/imports.css",
  "/script.js",
  "/icons/app-icon.png",
  "/pexels-samarth-1193941.jpg",
  "/pexels-samarth-1193942.jpg",
  "/pexels-samarth-1193943.jpg"
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