import {useState} from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [payload, setPayload] = useState<any>(null)

  return {
    isOpen: isOpenModal,
    close: () => {
      setIsOpenModal(false)
      setPayload(null)
    },
    open: (value: any) => {
      setIsOpenModal(true)
      setPayload(value)
    },
    payload: payload
  }
}

