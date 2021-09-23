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
