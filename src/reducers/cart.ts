const initialState = {
  cart: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_CART':
      return {
        cart: action.payload,
      }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}
