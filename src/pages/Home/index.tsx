import React, {useState} from "react";
import NiceModal from "@ebay/nice-modal-react";
import Accordion from "../../components/UI/Accordion";
import {Typography} from "../../components/modules";
import {ColorEnum, TypographyVariant} from "../../helpers/types";
import Button from "../../components/UI/Button";
import Divider from "../../components/UI/Divider";
import ModalEditUser from "../../modals/EditUser";
import ModalCreateUser from "../../modals/CreateUser";


export type HobbyOption = {
  label: string,
  value: string
}
export type UserType = { name: string; id: string; email: string, hobbies?: HobbyOption[] }

const Home = () => {

  const [users, setUsers] = useState<UserType[]>([
    {
      id: '1',
      name: 'Olya',
      email: 'osshalakhina@gmail.com',
      hobbies: [{label: 'Reading', value: 'reading'}, {label: 'Swimming', value: 'swimming'}, {
        label: 'Cooking',
        value: 'cooking'
      }]
    },
    {
      id: '2',
      name: 'Yevhen',
      email: 'arr.ess1998@gmail.com',
      hobbies: [{label: 'Reading', value: 'reading'}, {label: 'Surfing', value: 'surf'}, {
        label: 'Cooking',
        value: 'cooking'
      }]
    },
  ])

  const createUser = (user: UserType) => {
    setUsers(prevState => [...prevState, {...user, id: Date.now().toString()}])
  }
  const showModalEdit = (user: UserType) => {
    NiceModal.show(ModalEditUser, user);
  };

  const showModalCreate = () => {
    NiceModal.show(ModalCreateUser, {createUser});
  };

  return (
    <div className="mt-5">
      <Accordion>
        {users.map((user) => (
            <Accordion.Item key={user.id} id={user.id}>
              <Accordion.Summary className='flex justify-between'>
                <Typography variant={TypographyVariant.h34}>
                  {user.name}
                </Typography>
                <Button size="small" onClick={() => showModalEdit(user)}>Edit details</Button>
              </Accordion.Summary>
              <Accordion.Details>
                {user.hobbies?.map((hobby) => (
                  <div className='flex items-center'>
                    <span className='mr-2' style={{color: `var(${ColorEnum.blue})`}}>&#10003;</span>
                    <Typography color={ColorEnum.blue} variant={TypographyVariant.p18}
                                key={hobby.value}>{hobby.label}</Typography>
                  </div>
                ))}
              </Accordion.Details>
            </Accordion.Item>
          )
        )}
      </Accordion>

      <Divider/>
      <div className='flex justify-center'><Button onClick={showModalCreate}>Add new user</Button>
      </div>
    </div>
  );
};

export default Home;
