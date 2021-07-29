import React from 'react'
import * as All from "./App.styles"
import axios from "axios";

class App extends React.Component {
    state = {
        aleatoryPokemon: [],
        picturePokemon: "",
        pokemon: [],
        catchPokemon: true,
        message: ""
    }

    componentDidMount() {
        this.getPokemons().then()
    }

    getPokemons = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

        try {
            const response = await axios.get(url)
            const aleatoryPokemon = Math.floor(Math.random() * response.data.results.length)
            const pokemon = response.data.results.filter((pokemon, index) => {
                return index === aleatoryPokemon
            })

            this.setState({
                aleatoryPokemon: pokemon
            })
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n ${e.response}`)
        }
    }

    getPicturePokemon = async () => {
        let url
        const pokemon = this.state.aleatoryPokemon.map((pokemon) => {
            url = pokemon.url
        })

        try {
            const response = await axios.get(url)
            this.setState({
                picturePokemon: response.data.sprites.front_default,
                pokemon: [response.data]
            })

        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n ${e.response}`)

        }
    }

    showPokemon = () => {
        this.getPokemons().then()
        this.getPicturePokemon().then()

        this.setState({
            catchPokemon: true,
        })
    }

    CatchPokemon = () => {
        const Messages = ["Não conseguiu capturar.", "Capturou!!", "Pokémon Fugiu!!"]

        const aleatoryMessage = Math.floor(Math.random() * Messages.length)

        this.setState({
            message: Messages[aleatoryMessage]
        })
    }

    pass = () => {
        this.setState({
            catchPokemon: false,
            message: ""
        })
    }

    render() {
        const pokemonCard = this.state.pokemon.map((pokemon) => {
                return (
                    <All.Card key={pokemon.name}>
                        {this.state.picturePokemon && <div>
                            <All.CardCover>
                                <img src={this.state.picturePokemon} alt="foto do pokemon"/>
                            </All.CardCover>

                            <All.CardContent>
                                <div>
                                    <h3>Nome:</h3>
                                    <p>{pokemon.name}</p>
                                </div>

                                <div>
                                    <h3>Tipo:</h3>
                                    {pokemon.types.map((type) => {
                                        return (
                                            <p key={type.type.name}>{type.type.name},</p>
                                        )
                                    })}
                                </div>
                            </All.CardContent>
                        </div>
                        }
                    </All.Card>
                )
            }
        )

        return (
            <All.Container>
                <All.HeaderContainer>
                    <All.Titles>
                        <h2>Jornada no mundo de Pokémon</h2>
                        <p>Você está explorando no mundo de pokémon, de repente você encontra um pokémon selvagem.</p>
                        <p>Clique no botão abaixo para saber qual é esse pokémon!</p>
                    </All.Titles>

                    <button onClick={this.showPokemon}>Qual Pokémon?</button>
                </All.HeaderContainer>

                <All.MainContainer>
                    {this.state.catchPokemon === true
                        ? (<>
                                {this.state.message !== ""
                                    ? this.state.message
                                    : pokemonCard
                                }


                                {this.state.pokemon.length !== 0
                                    ? (
                                        <All.Buttons>
                                            <button onClick={this.CatchPokemon}>Capturar</button>
                                            <button onClick={this.pass}>Passar</button>
                                        </All.Buttons>
                                    )
                                    : ""}
                            </>
                        )
                        : ""}


                </All.MainContainer>
            </All.Container>
        )
    }
}

export default App;
