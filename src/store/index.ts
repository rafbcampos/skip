import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'

import reducers from '../reducers'

const client = axios.create({
  baseURL: 'http://api-vanhack-event-sp.azurewebsites.net/',
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
})

const middlewares = [axiosMiddleware(client)]

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger

  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

export default store
