export enum FontWeight {
  Medium = 500,
  Bold = 700,
  Regular = 400,
}

export enum ColorEnum {
  white = '--color-white',
  blue = '--color-primary',
  black = '--color-black',
  text = '--color-text',
  text_dark = '--color-text-dark',
  text_grey = '--color-text-grey',
  red = '--color-red',
  green = '--color-green',
  orange = '--color-orange',

  grayscale_c1 = '--color-grayscale-c1',
  grayscale_c2 = '--color-grayscale-c2',
  grayscale_c3 = '--color-grayscale-c3',
  grayscale_c4 = '--color-grayscale-c4',
  grayscale_c4v = '--color-grayscale-c4v',
  grayscale_c5 = '--color-grayscale-c5',
  grayscale_c6 = '--color-grayscale-c6',
  grayscale_c7 = '--color-grayscale-c7',
  grayscale_c8 = '--color-grayscale-c8',
}

export enum TypographyVariant {
  h64 = 'h64',
  h48 = 'h48',
  h40 = 'h40',
  h34 = 'h34',
  h24 = 'h24',
  h28 = 'h28',
  h20 = 'h20',
  h18 = 'h18',
  p18 = 'p18',
  p16 = 'p16',
  p14 = 'p14',
  p12 = 'p12',
}

export enum FontFamily {
  OpenSans = '--font-family-open-sans',
  DMSans = '--font-family',
}

export type DefaultIconPropsType = {
  orientation?: Orientation
  fill?: ColorEnum | string
  fillEnum?: ColorEnum
  width?: number | string
  height?: number | string
  className?: string
}

export enum Orientation {
  Top,
  Right,
  Bottom,
  Left,
}

export enum OrientationSymmetric {
  Vertical,
  Horizontal,
}

export enum FormMessage {
  Required = 'Field is required',
  NotValid = 'Field is not valid',
  MaxLength = 'MaxLength',
  MinLength = 'MinLength',
}

export type OptionType = {
  label: string
  value: string
}
