const initialState = {
  cuisines: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_CUISINES_SUCCESS':
      return {
        cuisines: [...action.payload.data],
      }
    default:
      return state
  }
}
