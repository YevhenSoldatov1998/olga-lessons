import Modal from "../../components/Modal";
import {Typography} from "../../components/modules";
import Button from "../../components/UI/Button";
import {ButtonColorEnum} from "../../components/UI/Button/index.props";
import {UserType} from "../../pages/Home";
import {FC} from "react";


type ConfirmModalProps = {
  isOpen: boolean,
  close: () => void,
  user: UserType
}

export const ConfirmModal: FC<ConfirmModalProps> = ({user, ...modalProps}) => {
  const handleRemoveUser = () => {
  }
  return (
    <Modal {...modalProps}>
      <Typography>Are you sure that you want to delete a user {user?.name}</Typography>
      <Button className='mt-5' color={ButtonColorEnum.Red} size={"medium"}>Of course f***</Button>
    </Modal>
  )
}