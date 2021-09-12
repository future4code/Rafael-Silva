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

export const postVote = (post, direction) => {
    const body = {
        direction: direction
    }

    if (post.userVote) {
        axios.put(`${BASE_URL}/posts/${post.id}/votes`, body, HEADERS)
            .then((response) => {
                alert("Voto registrado com sucesso!")
                window.location.reload()
            })
            .catch((error) => {
                alert(error.data.response.message)
                console.log(error.data)
            })
    } else {
        axios.post(`${BASE_URL}/posts/${post.id}/votes`, body, HEADERS)
            .then((response) => {
                alert("Voto registrado com sucesso!")
                window.location.reload()
            })
            .catch((error) => {
                alert(error.data.response.message)
                console.log(error.data)
            })
    }
}

export const DeletePostVote = (postId) => {
    axios.delete(`${BASE_URL}/posts/${postId}/votes`, HEADERS)
        .then((response) => {
            alert("Voto deletado com sucesso!")
            window.location.reload()
        })
        .catch((error) => {
            alert(error.data.response.message)
            console.log(error.data)
        })
}

export const commentVote = (comment, direction) => {
    const body = {
        direction: direction
    }

    if (comment.userVote) {
        axios.put(`${BASE_URL}/comments/${comment.id}/votes`, body, HEADERS)
            .then((response) => {
                alert("Voto registrado com sucesso!")
                window.location.reload()
            })
            .catch((error) => {
                alert(error.data.response.message)
                console.log(error.data)
            })
    } else {
        axios.post(`${BASE_URL}/comments/${comment.id}/votes`, body, HEADERS)
            .then((response) => {
                alert("Voto registrado com sucesso!")
                window.location.reload()
            })
            .catch((error) => {
                alert(error.data.response.message)
                console.log(error.data)
            })
    }
}

export const DeleteCommentVote = (commentId) => {
    axios.delete(`${BASE_URL}/comments/${commentId}/votes`, HEADERS)
        .then((response) => {
            alert("Voto deletado com sucesso!")
            window.location.reload()
        })
        .catch((error) => {
            alert(error.data.response.message)
            console.log(error.data)
        })
}
