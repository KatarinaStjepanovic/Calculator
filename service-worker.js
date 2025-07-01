self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/colors.css',
        '/newExp.js',
        '/service-worker.js',

        '/calculator/cal.css',
        '/calculator/cal.js',

        '/recent/rec.js',
        '/recent/rec.css',

        '/favicon.ico',
        '/favicon-96x96.png',
        '/favicon.svg',
        '/apple-touch-icon.png',

        '/web-app-manifest-192x192.png',
        '/web-app-manifest-512x512.png',
        '/site.webmanifest',

        '/turnDevice.png'
      ]);
    }).catch((err) => {
      console.error('Greška pri keširanju:', err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  );
});
