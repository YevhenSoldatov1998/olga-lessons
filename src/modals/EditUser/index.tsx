import React from 'react';
import Modal from "../../components/Modal";
import NiceModal, {useModal} from "@ebay/nice-modal-react";
import UserForm from "../../components/UserForm";
import {UserType} from "../../pages/Home";

const ModalEditUser = () => {
  const {visible, remove} = useModal()

  const onSuccess = (user: UserType) => {

  }
  return (
    <Modal isOpen={visible} close={remove}>
      {/*<UserForm  defaultValue={user} />    */}
    </Modal>
  );
};

export default NiceModal.create(ModalEditUser);


