import React, {CSSProperties, FC, useState} from 'react'

import {Link, LinkProps} from 'react-router-dom'

import {FontWeight} from 'helpers/types'

import {ButtonColorEnum, ButtonPropsType} from './index.props'

import styles from './index.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Button: FC<ButtonPropsType> = ({
  dataTestId,
  color = ButtonColorEnum.Primary,
  borderRadius = 8,
  height,
  weight = FontWeight.Regular,
  isOutline,
  className,
  tag = 'button',
  style = {},
  size = 'large',
  children,
  ...rest
}) => {
  const [ripple, setRipple] = useState({x: -1, y: -1})
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {left, top} = event.currentTarget.getBoundingClientRect()
    setRipple({
      x: event.clientX - left - 150,
      y: event.clientY - top - 150,
    })

    const id = setTimeout(() => {
      setRipple({x: -1, y: -1})
    }, 800)
    if (ripple.x !== -1) {
      clearTimeout(id)
    }
  }
  const colorClassName = color ? `Btn_${isOutline ? 'outline_' : ''}${color}` : ''
  const props = {
    'data-test-id': dataTestId,
    className: cx('Btn', colorClassName, size, className),
    style: {
      borderRadius,
      fontWeight: weight,
      ...style,
    } as CSSProperties,
  }
  if (height) {
    props.style.height = height
  }

  if (tag === 'a') {
    return (
      <a {...props} {...(rest as ButtonPropsAnchor)}>
        {children}
      </a>
    )
  } else if (tag === 'link') {
    return (
      <Link {...props} {...(rest as ButtonPropsLink)}>
        {children}
      </Link>
    )
  } else {
    return (
      <button
        onMouseDown={handleClick}
        {...props}
        {...(rest as ButtonProps)}
        className={cx('Ripple', props.className || '')}
      >
        {ripple.x !== -1 && (
          <span
            className={cx('RippleEffect')}
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        )}
        {children}
      </button>
    )
  }
}

export default Button

export type ButtonProps = {
  /** @default button*/
  tag?: 'button'
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export type ButtonPropsLink = {tag: 'link'} & LinkProps
export type ButtonPropsAnchor = {tag: 'a'} & React.AnchorHTMLAttributes<HTMLAnchorElement>
