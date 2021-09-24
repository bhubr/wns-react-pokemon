import { useState, useEffect } from "react";

import pokemonSample from "./data/pokemon-sample";
import PokemonDetails from "./components/PokemonDetails";
import Pokemon from "./components/Pokemon";
import { IPokemon, PokeAPIResponseList } from "./interfaces";
import { getPokemonList } from "./utils/pokemon-api";

import "./App.css";


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
