import React, {FC} from 'react';
import Modal from "../../components/Modal";
import NiceModal, {useModal} from "@ebay/nice-modal-react";
import {UserType} from "../../pages/Home";
import UserForm, {FormType} from "components/UserForm";

interface ModalEditUserProps {
  user: UserType
  updateUser: (user: UserType) => void
}

const ModalEditUser: FC<ModalEditUserProps> = ({user, updateUser}) => {
  debugger
  const {visible, remove, resolve, reject} = useModal()

  const onSuccess = (user: UserType) => {
    updateUser(user)
    resolve(user.name)
    remove()
  }
  const onError= ()=> {
    reject('This user not found')
    remove()
  }
  return (
    <Modal isOpen={visible} close={remove}>
      <button onClick={onError}>Show error</button>
      <UserForm defaultValues={user} type={FormType.Edit} onSuccess={onSuccess}/>
    </Modal>
  );
};

export default NiceModal.create(ModalEditUser);


