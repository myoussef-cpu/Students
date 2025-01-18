const CACHE_NAME = "offline-cache-v1";
const OFFLINE_URLS = [
  "/My-website/",          // الصفحة الرئيسية
  "/My-website/index.html" // ملف HTML
];

// تثبيت Service Worker وتخزين الملفات في الكاش
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_URLS);
    })
  );
});

// الرد على الطلبات باستخدام الكاش
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
