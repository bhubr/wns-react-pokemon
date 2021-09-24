import { IPokemon } from "../interfaces"
import PokemonDetails from "./PokemonDetails";
import { getPokemonDetails } from "../utils/pokemon-api";

function Pokemon(props: IPokemon) {
    return (
        <div>
            <h3 onClick={(e) => getPokemonDetails(props.url)}>{props.name}</h3>
        </div>
)
    }
export default Pokemon;