import {useEffect, useState} from "react";
import axios from "axios";
import {CONF_BASE_URL, HEADERS} from "../constants/urls";


const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios
            .get(`${CONF_BASE_URL}${endpoint}`, HEADERS)
            .then((response) => {
                setData(response.data)
            })
            .catch((e) => {
                alert(e.response.data.message)
            })
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}

export default useRequestData