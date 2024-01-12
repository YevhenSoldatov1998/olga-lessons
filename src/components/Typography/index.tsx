import React, {DetailsHTMLAttributes, FC, forwardRef} from 'react'


import {TypographyPropsType, variantsMapping} from 'components/Typography/index.props'

import {ColorEnum, FontFamily, FontWeight, TypographyVariant} from 'helpers/types'

import s from './index.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(s)

export const Typography: FC<
  TypographyPropsType & DetailsHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>
> = forwardRef(
  (
    {
      variant = TypographyVariant.p16,
      color = ColorEnum.black,
      family = FontFamily.DMSans,
      children,
      weight = FontWeight.Regular,
      className: propsClassName,
      ...props
    },
    ref,
  ): any => {
    const Component = variant ? variantsMapping[variant] : 'p'

    const classNames =
      cx('typography', {
        [`typography--variant-${variant}`]: variant,
        [`typography--variant-${weight}`]: weight,
        [`typography${color}`]: color,
      }) +
      ' ' +
      (propsClassName ?? '')
    return (
      <Component
        translate='yes'
        style={{fontFamily: `var(${family})`}}
        ref={ref}
        className={classNames}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

