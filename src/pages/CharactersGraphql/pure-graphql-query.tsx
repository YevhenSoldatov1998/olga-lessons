import React, {useEffect} from 'react';

const CharactersGraphql = () => {

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          query: `{
          characters{
            results{
              id
              name
              status
              species
              gender
              origin{
                name
                dimension
              }
              image
            }
          }
  }`
        }
      )
    })
    const result = await response.json()
    debugger

  }
  useEffect(() => {
    getCharacters()

  }, [])
  return (
    <div>
      CharactersGraphql
    </div>
  );
};

export default CharactersGraphql;