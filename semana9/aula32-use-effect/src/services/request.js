import {CONF_BASE_URL, CONF_POKE_NAME} from "../constants/urls";
import axios from "axios";


// get all 151 pokemons
export const getPokemons = async (saveData) => {
    try{
        const response = await axios.get(CONF_BASE_URL)

        saveData(response.data.results)
    } catch (e){
        console.log(e)
    }
}

// get pokemon by name
export const getPokemonName = async (pokeName, saveData) => {
    try {
        const url = CONF_POKE_NAME + pokeName
        const response = await axios.get(url)

        saveData(response.data)
    } catch (e) {
        console.log(e)
    }
}