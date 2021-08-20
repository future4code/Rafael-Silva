import axios from "axios";
import {CONF_BASE_URL, HEADERS} from "../constants/urls";
import {goToLoginPage, goToAdminPage} from "../routes/coordinator";


export const sendApplication = (body, tripId, clear) => {
    axios.post(`${CONF_BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Candidatura enviada com sucesso!")
            clear()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}

export const createTrip  = (body, history, clean) => {
    axios.post(`${CONF_BASE_URL}/trips`, body, HEADERS)
        .then(() => {
            alert("Viagem criada com sucesso!")
            clean()
            goToAdminPage(history)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}

export const deleteTrip = (tripId, history) => {
    axios.delete(`${CONF_BASE_URL}/trips/${tripId}/`, HEADERS)
        .then(() => {
            alert("Viagem removida com sucesso!")
            goToAdminPage(history)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })

}

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${CONF_BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, HEADERS)
        .then(() => {
            alert("Decisão registrada com sucesso!")
            getTripDetails()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}

export const logout = (history) => {
    localStorage.removeItem("token")
    goToLoginPage(history)
}