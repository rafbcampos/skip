export function getStores() {
  return {
    type: 'GET_STORES',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Store`,
      },
    },
  }
}

export function searchStoreByText(searchText) {
  return {
    type: 'GET_SEARCH_STORE_BY_TEXT',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Store/search/${searchText}`,
      },
    },
  }
}

export function searchStoreById(storeId) {
  return {
    type: 'SEARCH_STORE_BY_ID',
    request: {
      method: 'get',
      url: `/api/v1/Store/${storeId}`,
    },
  }
}

export function searchProductsByStoreId(storeId) {
  return {
    type: 'SEARCH_PRODUCTS_BY_STORE_ID',
    request: {
      method: 'get',
      url: `/api/v1/Store/${storeId}/products`,
    },
  }
}
