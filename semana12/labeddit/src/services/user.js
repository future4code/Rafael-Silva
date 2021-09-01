import axios from "axios"
import {BASE_URL, HEADERS} from "../constants/urls"
import {goToFeedPage} from "../routes/coordinator";

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
            console.log(err.response)
        })
}

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
            console.log(err.response)
        })
}