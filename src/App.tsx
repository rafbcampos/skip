import React from 'react'
import { SkipThemeProvider } from './theme/SkipThemeProvider'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import store, { persistor } from './store'
import Routes from './pages/Routes'
import theme from './theme'

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/sw.js')
//       .then(registration => {
//         console.log('SW registered: ', registration)
//       })
//       .catch(registrationError => {
//         console.log('SW registration failed: ', registrationError)
//       })
//   })
// }

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SkipThemeProvider theme={theme}>
        <Routes />
      </SkipThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
