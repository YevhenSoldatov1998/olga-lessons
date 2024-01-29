// {
//   "id": 1,
//   "name": "Rick Sanchez",
//   "status": "Alive",
//   "species": "Human",
//   "type": "",
//   "gender": "Male",
//   "origin": {
//   "name": "Earth (C-137)",
//     "url": "https://rickandmortyapi.com/api/location/1"
// },
//   "location": {
//   "name": "Earth (Replacement Dimension)",
//     "url": "https://rickandmortyapi.com/api/location/20"
// },
//   "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   "episode": [
//   "https://rickandmortyapi.com/api/episode/1",
//   "https://rickandmortyapi.com/api/episode/2",
//   // ...
// ],
//   "url": "https://rickandmortyapi.com/api/character/1",
//   "created": "2017-11-04T18:48:46.250Z"
// },

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

type Episode = { name: string };

export type CharacterDetailResponse = { character: Character }
export type CharacterDetailVariables = { id: number | string }
export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  episode: Episode[];
  image: string;
  url: string;
  created: string;
};

export type PageInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharacterResponse = {
  results: Character[];
  info: PageInfo;
};
export type CharactersResponse = {
  characters: CharacterResponse
}


export type NavigateFnParams = "next" | "prev";


type FilterCharacter = {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
}

export type CharacterVariables = {
  id: number

}


export type CharactersVariables = {
  page?: number
  filter?: FilterCharacter
}













