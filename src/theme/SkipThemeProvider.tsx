import React, { Component } from 'react'
import { injectGlobal } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from '../types/theme'

interface SkipThemeProviderProps {
  theme: Theme
}

export class SkipThemeProvider extends Component<SkipThemeProviderProps> {
  state = { theme: this.props.theme }

  componentDidMount() {
    this.applyGlobalStyle()
    this.applyBuggyfill()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.theme !== this.props.theme) {
      this.setState({ theme: nextProps.theme })
    }
  }

  applyGlobalStyle = () => {
    injectGlobal`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
      }

      blockquote {
        margin-left: 0;
      }

      body {

        font-family: 'Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust:100%
      }

      input {
        background: transparent;
        border: none;
      }

      a {
        text-decoration: none;
      }
    `
  }

  // https://github.com/rodneyrehm/viewport-units-buggyfill
  applyBuggyfill = () => {
    const viewportUnitsBuggyfill = require('viewport-units-buggyfill')
    viewportUnitsBuggyfill.init()

    window.onorientationchange = function() {
      viewportUnitsBuggyfill.refresh()
    }
  }

  render() {
    return <ThemeProvider {...this.props}>{this.props.children}</ThemeProvider>
  }
}
