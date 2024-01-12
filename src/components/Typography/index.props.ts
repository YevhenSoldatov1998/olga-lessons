import {ColorEnum, FontFamily, FontWeight, TypographyVariant} from 'helpers/types'

export interface TypographyPropsType {
  variant?: TypographyVariant
  color?: ColorEnum
  weight?: FontWeight
  family?: FontFamily
}

export const variantsMapping = {
  h64: 'h1',
  h48: 'h2',
  h40: 'h3',
  h34: 'h4',
  h24: 'h5',
  h28: 'h5',
  h20: 'p',
  h18: 'h6',
  p18: 'p',
  p16: 'p',
  p14: 'p',
  p12: 'p',
} as any
