import React from 'react';

export type AvatarProps = {
  avatar: string;
  username: string;
}

const Avatar = ({avatar, username}: AvatarProps) => {
  return (
    <div>
      <img src={avatar} alt={username}/>
      <h2>{username}</h2>
    </div>
  );
};

export default Avatar;