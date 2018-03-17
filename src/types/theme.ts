type Breakpoints = string[]

type Margins = string[]

type Space = number[]

type FontSizes = number[]

type Font = string

interface Colors {
  background: string
  nav: string
  heading: string
  text: string
  action: string
}

interface Typography {
  textAlign: {
    body: string
    heading: string
  }
  size: {
    small: string
    paragraph: string
    lead: string
    h6: string
    h5: string
    h4: string
    h3: string
    h2: string
    h1: string
    h0: string
  }
}

interface Buttons {
  size: {
    large: {
      borderRadius: string
      padding: string
      fontSize: string
    }
    medium: {
      borderRadius: string
      padding: string
      fontSize: string
    }
    small: {
      borderRadius: string
      padding: string
      fontSize: string
    }
  }
  style: {
    primary: {
      color: string
      background: string
      border: string
    }
    secondary: {
      color: string
      background: string
      border: string
    }
    regular: {
      color: string
      background: string
      border: string
    }
  }
}

export interface Theme {
  breakpoints: Breakpoints
  typography: Typography
  fontSizes: FontSizes
  buttons: Buttons
  margins: Margins
  space: Space
  font: Font
  colors: Colors
  name: string
}
