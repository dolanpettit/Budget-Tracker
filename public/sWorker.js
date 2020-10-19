const CACHE_NAME = "static-cache-v3";
const DATA_CACHE_NAME = "data-cache-v4";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/index.js",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
];

// Service Worker Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME),
    caches.then((cache) => cache.addAll(FILES_TO_CACHE)),
    caches.then(self.skipWaiting())
  );
});

// Service Worker Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Service Worker Fetch

