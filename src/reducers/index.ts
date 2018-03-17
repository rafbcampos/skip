import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import brands from './brands'
import events from './events'

const reducers = {
  brands,
  events
}

const config = {
  storage,
  key: 'root',
}

const persistedReducers = persistCombineReducers(config, reducers)

export default persistedReducers
