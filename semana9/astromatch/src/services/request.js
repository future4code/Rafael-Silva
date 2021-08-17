import axios from "axios";
import {CONF_BASE_URL, CONF_CHOOSE_PERSON_URL, CONF_CLEAR_PROFILES_URL, CONF_MATCHES_URL} from "../constants/urls";


// Get Aleatory Profile
export const getProfileToChoose = async (saveData) => {
    try {
        const response = await axios.get(CONF_BASE_URL)

        saveData(response.data.profile)
    } catch (e) {
        alert("Ooops! Ocorreu um erro. Tente novamente.")
        console.log(e.response)
    }
}

//Choose a Person
export const choosePerson = async (userChoose, saveData) => {
    try {
        const response = await axios.post(CONF_CHOOSE_PERSON_URL, userChoose)

        saveData(response.data.isMatch)
    } catch (e) {
        alert("Ooops! Ocorreu um erro. Tente novamente.")
        console.log(e.response)
    }
}

//Get Matches
export const getMatches = async (saveData) => {
    try {
        const response = await axios.get(CONF_MATCHES_URL)

        saveData(response.data.matches)
    } catch (e) {
        alert("Ooops! Ocorreu um erro. Tente novamente.")
        console.log(e.response)
    }
}

//Clear

export const clearProfilesFromApi = async (saveData) => {
    try {
        const response = await axios.put(CONF_CLEAR_PROFILES_URL)

        saveData(response.data.message)
    } catch (e) {
        alert("Ooops! Ocorreu um erro. Tente novamente.")
        console.log(e.response)
    }
}