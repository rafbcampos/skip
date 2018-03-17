import { Theme } from '../types/theme'

const breakpoints = ['568px', '736px', '1024px', '1200px']
const margins = ['8vw', '8vw', '58px', '66px', '72px']
const space = [0, 6, 12, 24, 36, 48, 60, 90, 120]
const fontSizes = [15, 16, 17, 18, 19]
const font =
  'Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
const colors = {
  background: '#f2f2f2',
  nav: '#bc2e31',
  heading: '#fff',
  text: '#333333',
  action: '#467695',
}
const typography = {
  textAlign: {
    body: 'left',
    heading: 'left',
  },
  size: {
    small: '0.8em',
    paragraph: '1.0em',
    lead: '1.1em',
    h6: '0.8em',
    h5: '1.0em',
    h4: '1.3em',
    h3: '1.8em',
    h2: '2.3em',
    h1: '3.0em',
    h0: '4.0em',
  },
}
const buttons = {
  size: {
    large: {
      borderRadius: '50px',
      padding: '14px 42px 12px',
      fontSize: typography.size.lead,
    },
    medium: {
      borderRadius: '50px',
      padding: '14px 42px 12px',
      fontSize: '1em',
    },
    small: {
      borderRadius: '50px',
      padding: '10px 28px  8px',
      fontSize: typography.size.small,
    },
  },
  style: {
    primary: {
      color: colors.heading,
      background: colors.nav,
      border: 'none',
    },
    secondary: {
      color: colors.nav,
      background: colors.heading,
      border: `1px solid ${colors.nav}`,
    },
    regular: {
      color: colors.heading,
      background: colors.action,
      border: 'none',
    },
  },
}

const theme: Theme = {
  breakpoints,
  typography,
  fontSizes,
  buttons,
  margins,
  space,
  font,
  colors,
  name: 'base',
}

export default theme
