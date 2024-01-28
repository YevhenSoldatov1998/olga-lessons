import React, { useEffect, useState } from "react";
import { API_REST } from "../../variables/urls";
import { useParams } from "react-router-dom";
import { Character } from "../../types";
import "scss/index.scss";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<null | Character>(null);

  const getCharacter = async () => {
    const response = await fetch(API_REST.character + "/" + characterId);
    const result = (await response.json()) as Character;
    setCharacter(result);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div className="personal">
      <h1 className="personalName">{character?.name}</h1>
      <img
        className="personalPhoto"
        src={character?.image}
        alt={character?.name}
      />
      <div className="personalInfo">
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        <p>{character?.status}</p>
        <p>{character?.location.name}</p>
      </div>
      <p>{character?.created}</p>
    </div>
  );
};

export default CharacterDetails;
