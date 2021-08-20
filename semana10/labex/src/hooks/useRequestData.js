import {useEffect, useState} from "react";
import axios from "axios";

const useRequestData = (url, headers) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)

    const getData = () => {
        axios
            .get(url,headers)
            .then((response) => {
                setData(response.data)
                setLoader(false)
            })
            .catch((e) => {
                setError(e.response)
                setLoader(false)
            })
    }

    useEffect(() => {
        setLoader(true)
        getData()
    }, [url])

    return [data, error, loader, getData]
}

export default useRequestData