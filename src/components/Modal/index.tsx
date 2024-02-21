import React, {createContext, ElementRef, FC, PropsWithChildren, useContext, useEffect, useRef, useState} from 'react';
import s from './index.module.scss'
import classNames from "classnames/bind";
import {createPortal} from "react-dom";
import Button from "../UI/Button";

const cx = classNames.bind(s);

interface ModalProps extends PropsWithChildren {
  isOpen: boolean,
  close: () => void,
}


interface ModalContextType {
  handleClose: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)


interface ModalComponent extends FC<ModalProps> {
  ButtonClose: FC<PropsWithChildren>
}

const Modal: ModalComponent = ({children, isOpen, close}) => {
  const [isAnimate, setAnimate] = useState(false)
  console.log('MODAL RENDER')
  const [modalEl] = useState(document.createElement('div') as HTMLElement) // null

  useEffect(() => {
    console.log('MODAL MOUNTED')
    document.body.append(modalEl)
    return () => {
      console.log('MODAL UNMOUNTED')
      modalEl.remove() // remove modalEl from the DOM when component is unmounted
    }

  }, [modalEl]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 100)
    } else {
      setAnimate(false)
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimate(false)
    setTimeout(close, 500)
  }

  if (!isOpen || !modalEl) return null

  return createPortal(
    <div className={cx('Backdrop')}
         onClick={handleClose}
    >
      <div
        className={cx('Modal', {
          Show: isAnimate
        })}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button className={cx('CloseBtn')} onClick={handleClose}>&times;</button>
        <div className={cx('ModalContent')}>
          <ModalContext.Provider value={{handleClose}}>
            {children}
          </ModalContext.Provider>
        </div>
      </div>
    </div>,
    modalEl
  );
};

const ButtonCloseComponent: FC<PropsWithChildren> = ({children}) => {
  const {handleClose} = useContext(ModalContext) as ModalContextType
  return (
    <Button onClick={handleClose}>
      {children}
    </Button>
  )
}

Modal.ButtonClose = ButtonCloseComponent
export default Modal;