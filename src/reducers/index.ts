import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import auth from './auth'
import cuisine from './cuisine'
import stores from './store'

const reducers = {
  auth,
  cuisine,
  stores,
}

const config = {
  storage,
  key: 'root',
}

const persistedReducers = persistCombineReducers(config, reducers)

export default persistedReducers
