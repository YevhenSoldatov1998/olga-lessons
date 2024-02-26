import React from 'react';
import NiceModal, {useModal} from "@ebay/nice-modal-react";
import {Typography} from "../../components/modules";
import {TypographyVariant} from "../../helpers/types";
import Modal from "../../components/Modal";

const NiceModalInfo = ({text}: { text: string }) => {
  const {visible, remove} = useModal()
  return (
    <Modal isOpen={visible} close={remove} >
      <Typography variant={TypographyVariant.h28} className={'text-center'}>{text}</Typography>
      <div className={'flex items-center mt-4'}>
        <Modal.ButtonClose>
          Confirm
        </Modal.ButtonClose>
      </div>
    </Modal>
  );
};

export default NiceModal.create(NiceModalInfo);