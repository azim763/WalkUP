





// const cacheName = "v1";    
// const urlsToCache = [ "/" , "/index.html", "/css/main.css", "/js/main.js" ]; 


// self.addEventListener('install', event => {
//     // it is invoked when the browser installs the service worker
//     // here we cache the resources that are defined in the urlsToCache[] array
//     console.log(`[SW] Event fired: ${event.type}`);
//     event.waitUntil(				  // waitUntil tells the browser to wait for the passed promise is done
// 		  caches.open( cacheName )		//caches is a global object representing CacheStorage
// 			  .then( ( cache ) => { 			// open the cache with the name cacheName*
// 				  return cache.addAll( urlsToCache );      	// pass the array of URLs to cache. returns a promise
// 		  }));
//       console.log(`[SW] installed`);
// });

// self.addEventListener('activate', event => {
//     // it is invoked after the service worker completes its installation. 
//     // It's a place for the service worker to clean up from previous SW versions
//     console.log(`[SW] Event fired: ${event.type}`);

//     console.log(`[SW] activated`);
// });

// self.addEventListener('fetch', event => {
//     // Fires whenever the app requests a resource (file or data)  normally this is where the service worker would check to see
//     // if the requested resource is in the local cache before going to the server to get it. 
//     console.log(`[SW] Fetch event for ${event.request.url}`);

//     //1. No Strategy, simply forward the request to server (i.e. No Offline Capability)
//     event.respondWith(fetch(event.request));
 


// });






const OFFLINE_VERSION = 1;
const CACHE_NAME = 'offline';
// Customize this with a different URL if needed.
const OFFLINE_URL = 'other/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        // Always try the network first.
        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }

});
