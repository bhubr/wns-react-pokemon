import axios, { AxiosResponse } from "axios";
import { PokeAPIResponseList } from "../interfaces";

export async function getPokemonList(): Promise<PokeAPIResponseList | undefined> {
  try {
    const response: AxiosResponse<PokeAPIResponseList> = await axios.get(
      "https://pokeapi.co/api/v2/pokemon"
    );
    // Set state
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonDetails(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
    // Set state
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
