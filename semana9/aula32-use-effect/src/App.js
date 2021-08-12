import {useEffect, useState} from "react";

//Styles App
import {CardContainer, Container} from "./assets/App.styles";

//Requests
import {getPokemons} from "./services/request";
import PokeCard from "./components/PokeCard";

function App() {
    const [pokeList, setPokeList] = useState([])
    const [pokeName, setPokeName] = useState("")


    const pokemonList = (data) => {
        setPokeList(data)
    }
    const changePokeName = (e) => {
        setPokeName(e.target.value)
    }

    useEffect(() => {
        getPokemons(pokemonList)
    }, [])

    return (
        <Container>
            <select onChange={changePokeName}>
                <option value="">Nenhum</option>
                {pokeList.map((pokemon) => {
                    return (
                        <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                    )
                })}
            </select>

            <CardContainer>
                {pokeName &&
                <PokeCard
                    PokeName={pokeName}
                />
                }
            </CardContainer>
        </Container>
    );
}

export default App;
