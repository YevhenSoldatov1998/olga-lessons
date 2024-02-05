import React from 'react';
import {useUserContext} from "shared/providers/UserProvider";
import {Typography} from "../../components/modules";
import {ColorEnum, TypographyVariant} from "helpers/types";

const Home = () => {
  const {user} = useUserContext()
  return (
    <div className='mt-5'>
      <Typography variant={TypographyVariant.h34} color={ColorEnum.blue} className='text-center'>
        Welcome {user?.username}
      </Typography>
      <Typography variant={TypographyVariant.h18} color={ColorEnum.grayscale_c4} className='text-center'>
        email: {user?.email}
      </Typography>
    </div>
  );
};

export default Home;