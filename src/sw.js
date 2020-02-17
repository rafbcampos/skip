workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store/'),
  workbox.strategies.staleWhileRevalidate(),
)

workbox.routing.registerRoute(
  new RegExp('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Product/'),
  workbox.strategies.staleWhileRevalidate(),
)

workbox.precaching.precacheAndRoute(self.__precacheManifest)
