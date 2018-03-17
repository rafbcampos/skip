import { css } from 'react-emotion'
import {
  textAlign,
  letterSpacing,
  fontWeight,
  lineHeight,
  color,
  space,
  width,
} from 'styled-system'
import { BoxComponent, ResponsiveProp } from '../grid'
import { Theme } from '../../types/theme'
import styled from '../../theme/styled'

export interface TextComponent extends BoxComponent {
  lineHeight?: ResponsiveProp
  fontWeight?: ResponsiveProp
  letterSpacing?: ResponsiveProp
  align?: ResponsiveProp
  theme?: Theme
  font?: string
}

const textBottom = 2
const headingBottom = [2, 2, 3, 3, 4]

const getCommomCSS = (themeElement: string) => props => css`
  font-size: ${props.theme.typography.size[themeElement]};
  font-family: ${props.theme.font};
  text-align: ${props.theme.typography.textAlign.body};
  color: ${props.theme.colors.text};
  a {
    color: ${props.theme.colors.action};
    text-transform: none;
    font-weight: bold;
  }
`

export const Paragraph = styled<TextComponent, 'p'>('p')`
  ${getCommomCSS('paragraph')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

Paragraph.defaultProps = {
  mb: textBottom,
}

export const Small = styled<TextComponent, 'small'>('small')`
  ${getCommomCSS('small')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

Small.defaultProps = {
  mb: textBottom,
}

export const Lead = styled<TextComponent, 'strong'>('strong')`
  ${getCommomCSS('lead')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

Lead.defaultProps = {
  mb: textBottom,
}

export const A = styled<TextComponent, 'a'>('a')`
  ${getCommomCSS('paragraph')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

A.defaultProps = {
  mb: 0,
}

export const H0 = styled<TextComponent, 'h1'>('h1')`
  ${getCommomCSS('h0')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H0.defaultProps = {
  mb: headingBottom,
}

export const H1 = styled<TextComponent, 'h1'>('h1')`
  ${getCommomCSS('h1')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H1.defaultProps = {
  mb: headingBottom,
}

export const H2 = styled<TextComponent, 'h2'>('h2')`
  ${getCommomCSS('h2')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H2.defaultProps = {
  mb: headingBottom,
}

export const H3 = styled<TextComponent, 'h3'>('h3')`
  ${getCommomCSS('h3')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H3.defaultProps = {
  mb: headingBottom,
}

export const H4 = styled<TextComponent, 'h4'>('h4')`
  ${getCommomCSS('h4')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H4.defaultProps = {
  mb: headingBottom,
}

export const H5 = styled<TextComponent, 'h5'>('h5')`
  ${getCommomCSS('h5')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H5.defaultProps = {
  mb: headingBottom,
}

export const H6 = styled<TextComponent, 'h6'>('h6')`
  ${getCommomCSS('h6')};
  ${letterSpacing};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${color};
  ${space};
  ${width};
`

H6.defaultProps = {
  mb: headingBottom,
}
