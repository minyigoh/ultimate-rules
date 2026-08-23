const VERSION = "learn-ultimate-29976490";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest",
                "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // The shared lesson counter lives on another origin. Leave it alone: caching
  // it would freeze the number, and the offline fallback below would hand a
  // JSON fetch a page of HTML.
  if (url.origin !== location.origin) return;
  // /desk/ is the private content dashboard, not part of the offline lesson
  // site. Leave it to the network so edits show up instead of being pinned to
  // whatever version happened to be cached first.
  if (url.pathname.includes("/desk/")) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match("./index.html")))
  );
});
