import {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import useForm from "../hooks/useForm";

const GlobalStateContext = (props) => {
  

 


    const states = {};
    const setters = {};
    const requests = {};

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
