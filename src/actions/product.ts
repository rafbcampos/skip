export function getProducts() {
  return {
    type: 'GET_PRODUCTS',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Product`,
      },
    },
  }
}

export function searchProductByText(searchText) {
  return {
    type: 'GET_SEARCH_PRODUCT_BY_TEXT',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Product/search/${searchText}`,
      },
    },
  }
}

export function searchProductById(productId) {
  return {
    type: 'SEARCH_PRODUCT_BY_ID',
    request: {
      method: 'get',
      url: `/api/v1/Product/${productId}`,
    },
  }
}
