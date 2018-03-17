export function fetchPromoter(code) {
  return {
    type: 'FETCH_PROMOTER',
    payload: {
      request: {
        url: `/promoters/${code}`,
      },
    },
  }
}
