import React from 'react';
import {useUserContext} from "shared/providers/UserProvider";
import NiceModal from "@ebay/nice-modal-react";
import NiceModalCustom from "../../modals/NiceModalCustom";

export type UserTest = { name: string, id: number, email: string }

const Home = () => {
  // create nice modal user
  const [users, setUsers] = React.useState<UserTest[]>([])
  return (
    <div className='mt-5'>
      <li>User1</li>
      <li>User2</li>
      <li>User3</li>
    </div>
  );
};

export default Home;