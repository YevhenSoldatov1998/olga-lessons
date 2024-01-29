import React, {useEffect} from "react";
import {useQuery} from "@apollo/client";
import {characterQuery} from "apollo/queries/character";
import {useParams} from "react-router-dom";
import {CharacterDetailResponse, CharacterDetailVariables} from "types";

const CharacterDetails = () => {
  const {characterId} = useParams<{ characterId: string }>()
  const [episode, setEpisode] = React.useState<string>('')
  const {data, refetch, } = useQuery<CharacterDetailResponse, CharacterDetailVariables>(
    characterQuery,
    {
      variables: {id: characterId as string},
      skip: !characterId, // skip query
      fetchPolicy: 'network-only',
      onError: (error) => {
        debugger
      }
    }
  )
  useEffect(() => {
    const epis = data?.character.episode.map(e => e.name).join(', ') as string
    setEpisode(epis)
  }, [data?.character])

  return <div>
    {data?.character.name}
    <br/>
    {data?.character.gender}
    <p> Був в таких епізодах: {episode}</p>
    <button onClick={() => refetch()}>Оновити
    </button>
  </div>;
};

export default CharacterDetails;
