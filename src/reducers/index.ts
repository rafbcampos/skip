import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import auth from './auth'
import cuisine from './cuisine'
import store from './store'
import products from './products'
import order from './order'
import cart from './cart'

const reducers = {
  auth,
  cuisine,
  store,
  products,
  order,
  cart,
}

const config = {
  storage,
  key: 'root',
}

const persistedReducers = persistCombineReducers(config, reducers)

export default persistedReducers
