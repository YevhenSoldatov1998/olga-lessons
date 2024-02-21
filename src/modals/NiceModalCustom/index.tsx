import React, {FC} from 'react';
import Modal from "../../components/Modal";
import NiceModal, {useModal} from "@ebay/nice-modal-react";

const NiceModalCustom: FC<{ id: string }> = (props) => {
  const {visible, remove} = useModal()
  return (
    <div>
      <Modal close={remove} isOpen={visible}>
        <h1>Hello {props.id}</h1>
        <Modal.ButtonClose>
          Close modal
        </Modal.ButtonClose>

      </Modal>
    </div>
  );
};

export default NiceModal.create(NiceModalCustom);


