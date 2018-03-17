export function fetchBrands() {
  return {
    type: 'FETCH_BRANDS',
    payload: {
      request: {
        url: '/brands',
      },
    },
  }
}
