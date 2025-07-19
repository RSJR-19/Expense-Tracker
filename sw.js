const CACHE_NAME = "gastos_tracker_v2";
const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./zcript.js",
    "./rsjr_logo.png",
    "./bgm-the-winner-is-devotchka.mp3",
    "./bgSong.mp3",
    "./buttonNew.mp3",
    "./click.mp3",
    "./correct.mp3",
    "./correct2.mp3",
    "./gastos.mp3",
    "./wrong.mp3"
];


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting(); 
});


self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});