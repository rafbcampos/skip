const initialState = {
  token: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return { token: action.payload.data }
    default:
      return state
  }
}
