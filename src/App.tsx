import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import pokemonSample from "./data/pokemon-sample";
import PokemonDetails from "./components/PokemonDetails";
import Pokemon from "./components/Pokemon";
import { IPokemon, PokeAPIResponseList } from "./interfaces";

import "./App.css";

async function getPokemonList(): Promise<PokeAPIResponseList | undefined> {
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

function App() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function fetchPokemonList() {
      let dataOrUndef = await getPokemonList();
      if (dataOrUndef) {
        setPokemonList(dataOrUndef.results);
      }
    }

    fetchPokemonList();
  }, []);

  // Loop sur le state
  return (
    <div className="App">
      <div>
        {pokemonList.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
      <PokemonDetails
        id={pokemonSample.id}
        name={pokemonSample.name}
        weight={pokemonSample.weight}
        sprites={pokemonSample.sprites}
      />
    </div>
  );
}

export default App;
