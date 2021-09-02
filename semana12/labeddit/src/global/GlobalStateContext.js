import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";

const GlobalStateContext = (props) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [data] = useRequestData(`/posts?page=${page}&size=10`, [])
    const [rightButtonText, setRightButtonText] = useState(data ? "Logout" : "")

    useEffect(() => {
        setPosts(data)
    }, [data])


    const states = {posts, rightButtonText, isLoading};
    const setters = {setRightButtonText, setPage, setIsLoading};
    const requests = {};

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
