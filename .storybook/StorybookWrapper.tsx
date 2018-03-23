import React, { Component, ReactNode, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { SkipThemeProvider } from '../src/theme/SkipThemeProvider'
import { Theme } from '../src/types/theme'

const StyleSelect = styled('select')`
  margin: 12px 48px;
  font-size: 18px;
`

interface StorybookWrapperState {
  theme: Theme
}

interface StorybookWrapperProps {
  children: JSX.Element | ReactNode
  themes: Theme[]
}

export class StorybookWrapper extends Component<StorybookWrapperProps, StorybookWrapperState> {
  key = Number(localStorage.STORYBOOK_THEME || 0)
  state = { theme: this.props.themes[this.key] }

  changeTheme = e => {
    const idx = e.target.value
    localStorage.STORYBOOK_THEME = idx
    const theme = this.props.themes[idx]
    this.setState({ theme })
  }

  render() {
    const { theme } = this.state
    const { children } = this.props
    return (
      <Router>
        <Fragment>
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, viewport-fit=cover"
            />
          </Helmet>
          <StyleSelect defaultValue={String(this.key)} onChange={e => this.changeTheme(e)}>
            {this.props.themes.map((theme, index) => (
              <option key={index} value={index}>
                {theme.name}
              </option>
            ))}
          </StyleSelect>
          <SkipThemeProvider theme={theme}>{children}</SkipThemeProvider>
        </Fragment>
      </Router>
    )
  }
}
