import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";

const GlobalStateContext = (props) => {
    const [posts, setPosts] = useState([])
    const [data] = useRequestData("/posts", [])

    useEffect(() => {
        setPosts(data)
    }, [data])


    const states = {posts};
    const setters = {};
    const requests = {};

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
