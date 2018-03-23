const initialState = {
  order: [],
  customer: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ORDER_SUCCESS':
    case 'MAKE_ORDER_SUCCESS':
      return {
        order: [...action.payload.data],
        customer: state.customer,
      }
    case 'GET_CUSTOMER_BY_ORDER_SUCCESS':
      return { order: state.order, customer: action.payload.data }
    default:
      return state
  }
}
