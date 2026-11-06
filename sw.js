self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Diperlukan oleh browser agar aplikasi memenuhi syarat instalasi PWA
self.addEventListener('fetch', (e) => {
  // Biarkan kosong jika belum ingin menerapkan cache offline penuh
});
