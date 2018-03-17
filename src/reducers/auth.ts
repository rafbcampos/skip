const initialState = {
  token: '',
  authError: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        token: action.payload.data,
        authError: '',
      }
    case 'SIGNIN_FAIL':
      return {
        token: '',
        authError: action.error.response.data.error,
      }
    case 'SIGNUP_SUCCESS':
      return {
        token: action.payload.data,
        authError: '',
      }
    case 'SIGNUP_FAIL':
      return {
        token: '',
        authError: action.error.response.data.error,
      }
    case 'LOGOUT':
      return {
        initialState,
      }
    default:
      return state
  }
}
