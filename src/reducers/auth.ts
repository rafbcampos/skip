const initialState = {
  token: '',
  authError: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SIGNIN_ SUCCESS':
      return {
        user: action.meta.previousAction.payload.request.data.email,
        token: action.payload.data,
        authError: '',
      }
    case 'SIGNIN_FAIL':
      return {
        user: '',
        token: '',
        authError: action.error.response.data.error,
      }
    case 'SIGNUP_SUCCESS':
      return {
        user: action.meta.previousAction.payload.request.data.email,
        token: action.payload.data,
        authError: '',
      }
    case 'SIGNUP_FAIL':
      return {
        user: '',
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
