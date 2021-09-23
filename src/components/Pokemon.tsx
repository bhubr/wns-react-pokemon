import { IPokemon } from "../interfaces"

function Pokemon(props: IPokemon) {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
)
    }
export default Pokemon;