const initialState = {
  stores: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_STORES_SUCCESS':
      return {
        stores: [...action.payload.data],
      }
    default:
      return state
  }
}
