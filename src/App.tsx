import { useState, useEffect } from "react";

import pokemonSample from "./data/pokemon-sample";
import PokemonDetails from "./components/PokemonDetails";
import Pokemon from "./components/Pokemon";
import PokemonForm from "./components/PokemonForm";
import { IPokemon, PokeAPIResponseList, IPokemonDetails } from "./interfaces";
import { getPokemonList, getPokemonDetails } from "./utils/pokemon-api";

import "./App.css";


function App() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);
  const [isFormOn, setIsFormOn] = useState<boolean>(false);


  useEffect(() => {
    async function fetchPokemonList() {
      let dataOrUndef = await getPokemonList();
      if (dataOrUndef) {
        setPokemonList(dataOrUndef.results);
      }
    }

    fetchPokemonList();
  }, []);

  const onClickPokemon = async (url: string) => {
    const details = await getPokemonDetails(url);
    setPokemonDetails(details);
  }

  // Loop sur le state
  return (
    <div className="App">
      <div>
        {pokemonList.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            onClickPokemon={onClickPokemon}
          />
        ))}
      </div>

      <div>
        {
          pokemonDetails
            ? (
              <PokemonDetails
                id={pokemonDetails.id}
                name={pokemonDetails.name}
                weight={pokemonDetails.weight}
                sprites={pokemonDetails.sprites}
              />
            )
            : <p>Click a pokemon in the list to see its details</p>
        }
        {
          pokemonDetails && (
            isFormOn
            ? (<PokemonForm pokemon={pokemonDetails}/>)
            : <button onClick={()=>setIsFormOn(true)}>edit </button>
          )
        }
      </div>
    </div>
  );
}

export default App;
