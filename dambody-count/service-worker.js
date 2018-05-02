importScripts('/zyslsdprogram/dambody-count/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author tanghy(tanghuayinhd@gmail.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/zyslsdprogram/dambody-count/index.html",
    "revision": "83a9972f2a3d87bf5694504a67f5c659"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/css/index.d5f1d3f6.css"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/js/index.54155e43.js"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/js/manifest.bd48cff0.js"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/js/vendor.5f5f4d1e.js"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/js/vue.353db202.js"
  },
  {
    "url": "/zyslsdprogram/dambody-count/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
workboxSW.router.registerNavigationRoute('/zyslsdprogram/dambody-count/index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
