import axios from "axios";
import {BASE_URL, HEADERS} from "../constants/urls";

export const createPost = (body, clear, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/posts`, body, HEADERS)
        .then((response) => {
            alert("Posts criado com sucesso!")
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

export const createComment = (body, postId, clear, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/posts/${postId}/comments`, body, HEADERS)
        .then((response) => {
            alert("Comentário criado com sucesso!")
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

export const userPositiveVote = (postId) => {
    const body = {
        direction: 1
    }

    axios.post(`${BASE_URL}/posts/${postId}/votes`, body, HEADERS)
        .then((response) => {
            alert("Voto registrado")
            window.location.reload()
        })
        .catch((error) => {
            alert(error.data.response.message)
            console.log(error.data)
        })
}

export const userNegativeVote = (postId) => {
    const body = {
        direction: -1
    }

    axios.put(`${BASE_URL}/posts/${postId}/votes`, body, HEADERS)
        .then((response) => {
            alert("Voto registrado")
            window.location.reload()
        })
        .catch((error) => {
            alert(error.data.response.message)
            console.log(error.data)
        })
}