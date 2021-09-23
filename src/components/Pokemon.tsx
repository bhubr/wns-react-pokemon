interface PokemonProps {
    name : string
    url : string
}

function Pokemon(props: PokemonProps) {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
)
    }
export default Pokemon;