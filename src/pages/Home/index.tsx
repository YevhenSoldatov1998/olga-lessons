import React, {useState} from 'react';
import {useUserContext} from "shared/providers/UserProvider";
import {Typography} from "../../components/modules";
import {ColorEnum, TypographyVariant} from "helpers/types";
import Button from "../../components/UI/Button";
import {ButtonColorEnum} from "../../components/UI/Button/index.props";
import {ConfirmModal} from "../../modals/ConfirmModal";
import {useModal} from "../../helpers/hooks/useModal";


export type UserTest = { name: string, id: number }
const Home = () => {
  const {isOpen, open, close, payload: userPayload} = useModal()


  const {user} = useUserContext()
  const [users, setUsers] = useState<UserTest[]>([{name: 'Yevhen', id: 1}, {name: 'Olya', id: 2}, {
    name: 'Olex',
    id: 3
  }])

  console.log('payload', userPayload)
  return (
    <div className='mt-5'>
      <Typography variant={TypographyVariant.h34} color={ColorEnum.blue} className='text-center'>
        Welcome {user?.username}
      </Typography>
      <Typography variant={TypographyVariant.h18} color={ColorEnum.grayscale_c4} className='text-center'>
        email: {user?.email}
      </Typography>


      <ul>
        {users.map(user => (
          <div key={user.id}
               className='flex items-center mt-2'>
            <Typography color={ColorEnum.blue} variant={TypographyVariant.h28}>{user?.name}</Typography>
            <Button size={"small"} className={'ml-4'} color={ButtonColorEnum.Red}
                    onClick={() => open(user)}
            >Remove user</Button>
          </div>
        ))}
      </ul>

      <ConfirmModal isOpen={isOpen} close={close} user={userPayload}/>
    </div>
  );
};

export default Home;