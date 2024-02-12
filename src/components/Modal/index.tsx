import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import s from './index.module.scss'
import classNames from "classnames/bind";
import {createPortal} from "react-dom";

const cx = classNames.bind(s);

interface ModalProps extends PropsWithChildren {
  isOpen: boolean,
  close: () => void
}

const Modal: FC<ModalProps> = ({children, isOpen, close}) => {

  const [modalEl, setModalEl] = useState(document.getElementById('modal') as HTMLElement)

  useEffect(() => {
    if (!modalEl) {
      const el = document.createElement('div')
      el.id = 'modal'
      document.body.append(el)
      setModalEl(el)
    }
  }, []);

  if (!isOpen) return null

  return createPortal(
    <div className={cx('Backdrop')}>
      <div className={cx('Modal')}>
        <button className={cx('CloseBtn')} onClick={close}>&times;</button>
        <div className={cx(cx('ModalContent'))}>
          {children}
        </div>
      </div>
    </div>,
    modalEl
  );
};

export default Modal;