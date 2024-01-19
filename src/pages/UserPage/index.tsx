import React from 'react';
import {faker} from '@faker-js/faker';
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";


export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    job: faker.name.jobTitle(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    pets: faker.helpers.arrayElement(['cat', 'dog', 'mouse']),
    parents: {
      mather: faker.internet.userName(),
      father: faker.internet.userName(),
    }
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

const UserPage = () => {

  return (
    <div>
      {users.map(user => (
        <div key={user.userId}>
          <Avatar avatar={user.avatar} username={user.username}/>
          <UserInfo email={user.email} job={user.job} parents={user.parents}/>

        </div>
      ))}
    </div>
  );
};

export default UserPage;