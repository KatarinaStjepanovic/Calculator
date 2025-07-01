self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/Calculator/index.html',
        '/Calculator/style.css',
        '/Calculator/colors.css',
        '/Calculator/newExp.js',
        '/Calculator/service-worker.js',

        '/Calculator/calculator/cal.css',
        '/Calculator/calculator/cal.js',

        '/Calculator/recent/rec.js',
        '/Calculator/recent/rec.css',

        '/Calculator/favicon.ico',
        '/Calculator/favicon-96x96.png',
        '/Calculator/favicon.svg',
        '/Calculator/apple-touch-icon.png',

        '/Calculator/web-app-manifest-192x192.png',
        '/Calculator/web-app-manifest-512x512.png',
        '/Calculator/site.webmanifest',

        '/Calculator/turnDevice.png'
      ]);
    }).catch((err) => {
      console.error('Greška pri keširanju:', err);
    })
  );
});
