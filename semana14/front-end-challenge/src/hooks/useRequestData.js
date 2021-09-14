import {useEffect, useState} from 'react'
import axios from 'axios'
import {IMAGES_URL} from "../constants/urls";

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
          
            axios.get(`${IMAGES_URL}${endpoint}`)
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                    alert('Ocorreu um erro, tente novamente')
                })
       
    }, [endpoint])

    return [data, setData]
}

export default useRequestData
