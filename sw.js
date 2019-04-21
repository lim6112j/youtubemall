importScripts('/youtubemall/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/youtubemall/_nuxt/77836afe514129cf4533.js",
    "revision": "fb40481004a79987a84f284e62d19765"
  },
  {
    "url": "/youtubemall/_nuxt/7fc127458d88e5f73bbb.js",
    "revision": "626ca2855a27a1b0d83e052dafcff681"
  },
  {
    "url": "/youtubemall/_nuxt/aa691db0767ce51cb54d.js",
    "revision": "ef6ab5d12abc214c2d83a8b769747b1a"
  },
  {
    "url": "/youtubemall/_nuxt/dab5a353b3bc7dbd8385.js",
    "revision": "e68431e538168efc7a87a00b4beb6ee9"
  }
], {
  "cacheId": "youtubemall",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/youtubemall/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/youtubemall/.*'), workbox.strategies.networkFirst({}), 'GET')
