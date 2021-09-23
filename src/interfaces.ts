export interface IPokemon {
  name : string
  url : string
}

export interface PokeAPIResponseList {
  count: number;
  next: string;
  previous?: any;
  results: IPokemon[];
}

export interface IPokemonSprites {
  front_default: string;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  weight: number;
  sprites: IPokemonSprites;
}

// const fakePokemon: IPokemonDetails = {
//   id: 123,
//   name: 'Norbert',
//   weight: 34,
//   sprites: {
//     front_default: 'norbert.gif'
//   }
// }
// console.log(fakePokemon);

// export interface IPokemonProps {
//   pokemon: IPokemonDetails;
// }