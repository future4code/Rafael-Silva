import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import useForm from "../hooks/useForm";

const GlobalStateContext = (props) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [data] = useRequestData(`/posts?page=${page}&size=10`, [])
    const [rightButtonText, setRightButtonText] = useState(data ? "Logout" : "")
    const [search, setSearch] = useForm({
        search: ""
    })

    useEffect(() => {
        setPosts(data)
    }, [data])


    const states = {posts, rightButtonText, isLoading, search};
    const setters = {setRightButtonText, setPage, setIsLoading, setSearch};
    const requests = {};

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
