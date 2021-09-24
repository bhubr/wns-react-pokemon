import { useState } from "react"
import { IPokemonDetails } from "../interfaces"

// props de PokemonForm: { pokemon: { id: 1, name: 'bulbasaur', ... } } => { pokemon: IPokemonDetails }

interface Props {
  pokemon: IPokemonDetails;
}

function PokemonForm({pokemon}: Props) {

  const [weight, setWeight] = useState(pokemon.weight)
  const [name, setName] = useState(pokemon.name)
  const [image,setImage] = useState(pokemon.sprites.front_default)

  return(
    <form>
      <h3>Edit pokemon "{pokemon.name}"</h3>

      <label htmlFor="name">Name</label>
      <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>

      <label htmlFor="weight">Weight</label>
      <input type="text" value={weight} onChange={(e) => setWeight(Number(e.target.value))}/>

      <label htmlFor="image">Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
    </form>
  )
}

export default PokemonForm