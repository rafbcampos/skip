workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp('http://api-vanhack-event-sp.azurewebsites.net/'),
  workbox.strategies.staleWhileRevalidate(),
)

workbox.precaching.precacheAndRoute(self.__precacheManifest)
