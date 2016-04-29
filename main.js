!function(window, undefined) {
    'use strict';

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service.js').then(function(event) {
                console.log('[application] service worker register complete');

                if(event.waiting) {
                    console.log('[application] service worker available');
                };

                if(event.active) {
                    console.log('[application] service worker active');
                };
        }).catch(function(error) { console.log('you know nothing'); });
    }

    document.addEventListener('DOMContentLoaded', function() {
        //console.log('done');
    });
}(window);
