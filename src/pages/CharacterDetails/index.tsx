import React, { useEffect, useState } from "react";
import { API_REST } from "../../variables/urls";
import { useParams } from "react-router-dom";
import { Character } from "../../types";

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
  return <div></div>;
};

export default CharacterDetails;
