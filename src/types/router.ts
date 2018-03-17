export default interface RouterProps {
  match: {
    path: string
    url: string
    isExact: boolean
    params: { code: string }
  }
  location: {
    pathname: string
    search: string
    hash: string
  }
  history: {
    length: number
    action: string
    push: (path: string) => void
    replace: (path: string) => void
    location: {
      pathname: string
      search: string
      hash: string
    }
  }
}
