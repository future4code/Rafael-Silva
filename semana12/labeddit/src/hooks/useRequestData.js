import {useEffect, useState} from 'react'
import axios from 'axios'
import {BASE_URL, HEADERS} from "../constants/urls";

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            axios.get(`${BASE_URL}${endpoint}`, HEADERS)
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                    alert('Ocorreu um erro, tente novamente')
                })
        }
    }, [endpoint])

    return [data, setData]
}

export default useRequestData
