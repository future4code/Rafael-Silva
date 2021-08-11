import axios from "axios";
import {CONF_BASE_URL, CONF_CHOOSE_PERSON_URL, CONF_CLEAR_PROFILES_URL} from "../constants/urls";

export const getProfileToChoose = async (saveData) => {
    try {
        const response = await axios.get(CONF_BASE_URL)

        saveData(response.data.profile)
    } catch (e) {
        console.log(e.response)
    }
}

//Choose a Person
export const choosePerson = async (userChoose, saveData) => {
    try {
        const response = await axios.post(CONF_CHOOSE_PERSON_URL, userChoose)

        saveData(response.data.isMatch)

    } catch (e) {
        console.log(e.response)
    }
}

//Clear

export const clearProfilesFromApi = async (saveData) => {
    try {
        const response = await axios.put(CONF_CLEAR_PROFILES_URL)

        saveData(response.data.message)
    } catch (e) {
        console.log(e.response)
    }
}