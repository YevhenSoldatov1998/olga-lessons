import React from 'react';
import {Typography} from "../../components/modules";
import {Link} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {charactersQuery} from "../../apollo/queries/characters";
import {characterQuery} from "../../apollo/queries/character";

const Home = () => {
const {data} = useQuery(characterQuery, {variables: { id: 1}})

  debugger
  return (
    <div>
      HOME
    </div>
  );
};

export default Home;