export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PROMOTER_SUCCESS':
      return {
        ...state,
        [action.payload.data.code.toLowerCase()]: {
          events: action.payload.data.events,
          title: action.payload.data.title,
        },
      }
    case 'FETCH_PROMOTER_FAIL':
    default:
      return state
  }
}
