import {useEffect, useState} from "react";
import axios from "axios";

const useRequestData = (url, header) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        axios
            .get(url, header)
            .then((response) => {
                setData(response.data)
                setLoader(false)
            })
            .catch((e) => {
                setError(e.response)
                setLoader(false)
            })
    }, [url])

    return [data, error, loader]
}

export default useRequestData