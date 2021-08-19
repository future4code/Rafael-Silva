import axios from "axios";
import {CONF_BASE_URL} from "../constants/urls";


export const sendApplication = (body, tripId, clear) =>{
    axios.post(`${CONF_BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Candidatura enviada com sucesso!")
            clear()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}