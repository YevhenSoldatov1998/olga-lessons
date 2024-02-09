import {CSSProperties} from 'react'

import {FontWeight} from 'helpers/types'

import {ButtonProps, ButtonPropsAnchor, ButtonPropsLink} from './index'

export type ButtonPropsType = {
  color?: ButtonColorEnum
  isActive?: boolean
  dataTestId?: string
  isOutline?: boolean
  borderRadius?: CSSProperties['borderRadius']
  height?: CSSProperties['height']
  weight?: FontWeight
  size?: 'large' | 'medium' | 'small'
} & (ButtonProps | ButtonPropsLink | ButtonPropsAnchor)

export enum ButtonColorEnum {
  Primary = 'primary',
  Dark = 'dark',
  White = 'white',
  Red = 'red',
  RedLight = 'red-light',
  Green = 'green',
  GreenLight = 'green-light',
  Gray = 'gray',
}
