import React, {useEffect, useState} from 'react';
import {API_REST} from "variables/urls";
import CharactersList from "components/UI/CharactersList";
import {CharacterResponse} from "../../types";

const initial_url = `${API_REST.character}?page=1`


const CharactersRest = () => {

  const [data, setData] = useState<CharacterResponse | null>(null)

  const getCharacters = async (url = initial_url) => {
    const response = await fetch(url)
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    getCharacters()
  }, [])


  return (
    <div>
      <CharactersList
        list={data?.results}
        info={data?.info}
        onNavigate={(value) => {
          if (!data) return;
          const newUrl = data.info[value] as string
          getCharacters(newUrl)
        }}
      />
    </div>
  );
};

export default CharactersRest;