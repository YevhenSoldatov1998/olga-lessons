import React, {FC} from 'react';
import Modal from "../../components/Modal";
import NiceModal, {useModal} from "@ebay/nice-modal-react";
import UserForm, {FormType} from "components/UserForm";
import {UserType} from "../../pages/Home";
import {Typography} from "../../components/modules";
import {FontWeight, TypographyVariant} from "../../helpers/types";

interface ModalCreateUserProps {
  createUser: (user: UserType) => void
}


const ModalCreateUser: FC<ModalCreateUserProps> = ({createUser}) => {
  const {visible, remove} = useModal()

  const onSuccess = (user: UserType) => {
    createUser(user)
    remove()
  }


  return (
    <Modal isOpen={visible} close={remove}>
      <Typography className='text-center mb-3' weight={FontWeight.Medium} variant={TypographyVariant.h34}>Create new
        User</Typography>
      <UserForm type={FormType.Create} onSuccess={onSuccess}/>
    </Modal>
  );
};

export default NiceModal.create(ModalCreateUser);


