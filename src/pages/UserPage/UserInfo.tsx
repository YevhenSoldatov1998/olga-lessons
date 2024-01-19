import React from 'react';
import {Typography} from "../../components/modules";
import {ColorEnum} from "../../helpers/types";


type ParentType = {
  mather: string;
  father: string;
}


type UserInfoProps = {
  email: string;
  job: string;
  parents: ParentType
}

const UserInfo = ({job, email, parents}: UserInfoProps) => {
  return (
    <div>
      <p>{email}</p>
      <p>{job}</p>
      <Typography color={ColorEnum.green}>
        Mother: {parents.mather}
       <br/>
        Father: {parents.father}
      </Typography>
      <br/>
    </div>
  );
};

export default UserInfo;