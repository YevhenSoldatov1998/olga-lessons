import React, {FC, PropsWithChildren} from 'react';
import s from './index.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(s);

interface ModalProps extends PropsWithChildren {
  isOpen: boolean,
  close: () => void
}

const Modal: FC<ModalProps> = ({children, isOpen, close}) => {
  if (!isOpen) return null
  return (
    <div className={cx('Backdrop')}>
      <div className={cx('Modal')}>
        <button className={cx('CloseBtn')} onClick={close}>&times;</button>
        <div className={cx(cx('ModalContent'))}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;