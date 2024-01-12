import React from 'react'

import styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Loader = ({className = ''}) => {
  return <div className={cx('Loader', className)}>Loading ...</div>
}

export default Loader
