
// This is a basic service worker file.
// It's required for a web app to be considered a PWA.
// For now, it just registers itself and doesn't do any caching.

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
  // We are not intercepting fetch requests for now.
  // This is a pass-through.
  event.respondWith(fetch(event.request));
});
