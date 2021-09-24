import { IPokemon } from "../interfaces"
import PokemonDetails from "./PokemonDetails";

interface PokemonProps extends IPokemon {
    onClickPokemon(url: string): Promise<void>;
}

function Pokemon(props: PokemonProps ) {
    return (
        <div>
            <h3 onClick={() => props.onClickPokemon(props.url)}>{props.name}</h3>
        </div>
    )
}
export default Pokemon;
