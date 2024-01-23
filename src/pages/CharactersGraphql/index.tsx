import React from 'react';
import {useQuery} from "@apollo/client";
import CharactersList from "components/UI/CharactersList";
import {CharactersResponse, CharactersVariables} from "types";
import {charactersQuery} from "apollo/queries/characters";


const CharactersGraphql = () => {
  const {loading, error, data} = useQuery<CharactersResponse, CharactersVariables>(charactersQuery, {
    variables: {
      page: 1,
      filter: {
        name: 'Morty',
      }
    }
  })

  if (loading) return <p>Loading...</p>
  return (
    <div>
      <CharactersList
        list={data?.characters.results}
        info={data?.characters.info}
        onNavigate={() => null}

      />
    </div>
  );
};

export default CharactersGraphql;