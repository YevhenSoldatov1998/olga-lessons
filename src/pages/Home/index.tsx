import React from 'react';
import {useUserContext} from "shared/providers/UserProvider";
import NiceModal from "@ebay/nice-modal-react";
import NiceModalCustom from "../../modals/NiceModalCustom";

export type UserTest = { name: string, id: number }

const Home = () => {
  const {user} = useUserContext()

  const show = (customName: string) => {
    NiceModal.show(NiceModalCustom, {id: customName})
  }

  return (
    <div className='mt-5'>
      <li onClick={() => show('1')}>User1</li>
      <li onClick={() => show('2')}>User2</li>
    </div>
  );
};

export default Home;