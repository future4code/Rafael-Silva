import axios from "axios";
import {BASE_URL, HEADERS} from "../constants/urls";

export const createPost = (body, clear, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/posts`, body, HEADERS)
        .then((response) => {
            alert("Post criado com sucesso!")
            clear()
            setIsLoading(false)
            window.location.reload()
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.data.response.message)
            console.log(error.data)
        })
}