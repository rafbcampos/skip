import React from 'react'
import { Box as EmotionBox, Flex as EmotionFlex } from 'grid-emotion'

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T]

type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>

export type ResponsiveProp = number | string | number[] | string[]

export interface CommonProps {
  fontSize?: ResponsiveProp
  color?: string
  bg?: ResponsiveProp
  w?: ResponsiveProp
  m?: ResponsiveProp
  mt?: ResponsiveProp
  mr?: ResponsiveProp
  mb?: ResponsiveProp
  ml?: ResponsiveProp
  mx?: ResponsiveProp
  my?: ResponsiveProp
  p?: ResponsiveProp
  pt?: ResponsiveProp
  pr?: ResponsiveProp
  pb?: ResponsiveProp
  pl?: ResponsiveProp
  px?: ResponsiveProp
  py?: ResponsiveProp
}

interface BoxProps extends Omit<React.HTMLProps<HTMLDivElement>, 'width' | 'wrap' | 'is'> {
  flex?: ResponsiveProp
  order?: ResponsiveProp
  is?: string | React.ComponentClass<any>
}

interface FlexProps extends BoxProps {
  wrap?: ResponsiveProp | boolean
  direction?: ResponsiveProp | boolean
  align?: ResponsiveProp | boolean
  justify?: ResponsiveProp | boolean
  column?: boolean
}

export type BoxComponent = CommonProps & BoxProps
export type FlexComponent = CommonProps & FlexProps

export const Box: React.SFC<BoxComponent> = props => <EmotionBox {...props} />
export const Flex: React.SFC<FlexComponent> = props => <EmotionFlex {...props} />
