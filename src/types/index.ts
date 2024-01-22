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
  name: string
  url: string
}

export type Character = {
  id: number
  name: string,
  species: string,
  status: string
  type: string
  gender: string
  origin: Origin,
  image: string
}

export type PageInfo = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type CharacterResponse = {
  results: Character[],
  info: PageInfo
}

export type NavigateFnParams = 'next' | 'prev'

