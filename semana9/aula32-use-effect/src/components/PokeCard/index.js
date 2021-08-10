import React, {useEffect, useState} from "react";

//Styles
import {Card, CardContent, CardCover} from "./styles";

//Requests
import {getPokemonName} from "../../services/request";


const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    const pokeName = (data) => {
        setPokemon(data)
    }

    useEffect(() => {
        getPokemonName(props.PokeName, pokeName)
    }, [props.PokeName])

    return (
        <>
            <Card>
                {pokemon.sprites &&
                <div>
                    <CardCover>
                        <img src={pokemon.sprites.front_default} alt="foto do pokemon"/>
                    </CardCover>

                    <CardContent>
                        <div>
                            <h3>Nome:</h3>
                            <p>{pokemon.name}</p>
                        </div>

                        <div>
                            <h3>Peso:</h3>
                            <p>{pokemon.weight}</p>
                        </div>

                        <div>
                            <h3>Tipo:</h3>
                            {pokemon.types.map((type) => {
                                return (
                                    <p key={type.type.name}>
                                        {type.slot > 1
                                            ? "| " + type.type.name
                                            : type.type.name}
                                    </p>
                                )
                            })}
                        </div>
                    </CardContent>
                </div>
                }
            </Card>
        </>
    )
}

export default PokeCard