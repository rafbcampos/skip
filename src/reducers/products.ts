const initialState = {
  products: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_PRODUCTS_BY_STORE_ID_SUCCESS':
      return {
        products: [...action.payload.data],
      }
    default:
      return state
  }
}
