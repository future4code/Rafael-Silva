import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null){
            history.push("/login")
        } else {
            history.push("/admin/trips/list")
        }
    }, [])
}

export default useProtectedPage