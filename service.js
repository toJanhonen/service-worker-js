!function() {
    var serviceWorker = 'application-version0.0.1';
    var fileList = [
        '/', '/index.html', '/format/format.css', '/main.js'
    ];

    self.addEventListener('install', function(event) {
        console.log('[serviceWorker] in progress');
        event.waitUntil(
            caches.open(serviceWorker).then(function(item) {
                return item.addAll(fileList);
            }).catch(function(status) { console.log(status); })
        )
    });

    self.addEventListener('activate', function(event) {
        console.log('[serviceWorker] clear');
    });

    self.addEventListener('fetch', function(event) {
        console.log('[serviceWorker] fetch');
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            }).catch(function(status) { console.log(status); })
        )
    });
}();
