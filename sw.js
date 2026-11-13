// Service Worker v1.1.3 - Mode Aman GitHub Pages
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Wajib ada untuk memenuhi syarat PWA Chrome (Installable)
self.addEventListener('fetch', (e) => {
  // Hanya melewatkan request tanpa proses caching yang berisiko gagal di subdirektori
});
