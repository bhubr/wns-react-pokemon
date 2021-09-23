import { IPokemonDetails } from '../interfaces';

function PokemonDetails(props: IPokemonDetails) {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.weight}</p>
      <img src={props.sprites.front_default} alt="pokemon" />
    </div>
  )
}

export default PokemonDetails;