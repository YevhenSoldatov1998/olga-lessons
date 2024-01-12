import React, {useState,} from 'react';
import {Typography} from "components/modules";
import {TypographyVariant} from "../../helpers/types";

// ()=> ...


const posts = [
  {title: 'React', description: 'Sometiong dfdsdfdsfdsfdsfdsfdsfdsfdsfsfdsfdsf', id: 1},
  {title: 'Css', description: 'sdfdsdfdsfdsfdsfs dfdsfdsfdsf', id: 2},
  {title: 'Vet', description: 'sdfcv dsfdsfdsfdsfdsfdsf', id: 3},
  {title: 'cxv', description: 'Sometidsfdsfdsfong dfdsfdsfdsf', id: 4},
  {title: 'dsf', description: 'Sometiong dfdsfdsfdsf', id: 5},
  {title: 'dsf', description: 'Sometsdfdsfsdfsdiong dfdsfdsfdsf', id: 6},
];

const Posts = () => {
  const [value, setValue] = useState(posts)
  const handleClick = (id: number) => {
    alert(id)
  }
  const addNewPost = () => {
    const post = {title: 'Olga', description: 'Bla', id: 7}
    const newValues = [...value, post]
    setValue(newValues)
  }
  return (
    <div>
      {value.map((post) => {
        return <div
          onClick={() => handleClick(post.id)}
          style={{border: '1px solid blue', marginBottom: 10}}>
          <Typography>{post.title}</Typography>
          <Typography>{post.description.slice(0, 3) + '...'} </Typography>
        </div>
      })}
      <button onClick={() => addNewPost()}>Add new post</button>
    </div>
  );
};

export default Posts;