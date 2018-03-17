export function getCousine() {
  return {
    type: 'GET_CUISINI',
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
    type: 'SEARCH_TEXT',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Cousine/search/${text}`,
      },
    },
  }
}

export function searchSotreByCuisine(cousineId) {
  return {
    type: 'SEARCH_TEXT',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Cousine/${cousineId}/stores`,
      },
    },
  }
}
