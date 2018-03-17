import { sortBy } from 'lodash'

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_BRANDS_SUCCESS':
      return sortBy([...action.payload.data.items], 'id')
    default:
      return state
  }
}
