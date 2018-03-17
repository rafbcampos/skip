import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import auth from './auth'

const reducers = {
  auth,
}

const config = {
  storage,
  key: 'root',
}

const persistedReducers = persistCombineReducers(config, reducers)

export default persistedReducers
