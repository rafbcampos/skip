export function getCousines() {
  return {
    type: 'GET_CUISINES',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Cousine`,
      },
    },
  }
}

export function searchCuisineByText(text) {
  return {
    type: 'SEARCH_CUISINE_BY_TEXT',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Cousine/search/${text}`,
      },
    },
  }
}

export function searchStoreByCuisine(cousineId) {
  return {
    type: 'SEARCH_STORE_BY_CUISINE_ID',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Cousine/${cousineId}/stores`,
      },
    },
  }
}
