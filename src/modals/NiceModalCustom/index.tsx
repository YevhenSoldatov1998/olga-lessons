import React, {FC} from "react";
import Modal from "../../components/Modal";
import NiceModal, {useModal} from "@ebay/nice-modal-react";
import {UserType} from "../../pages/Home";

const NiceModalCustom: FC<UserType> = (props) => {
  const {visible, remove} = useModal();
  return (
    <div>
      <Modal close={remove} isOpen={visible}>
        <h1>Hello user {props.name}</h1>
        <p style={{marginTop: "10px", marginBottom: "20px"}}>
          Email: {props.email}
        </p>
        <Modal.ButtonClose>Close modal</Modal.ButtonClose>
      </Modal>
    </div>
  );
};

export default NiceModal.create(NiceModalCustom);
