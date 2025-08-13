const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/pwa2/',
    '/pwa2/index.html',
    '/pwa2/sobre.html',
    '/pwa2/script.js',
    '/pwa2/style.css',
    '/pwa2/manifest.json',
    '/pwa2/icons/icon-192x192.png',
    '/pwa2/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});


