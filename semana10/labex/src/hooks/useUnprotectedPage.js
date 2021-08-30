import {useHistory} from "react-router-dom";
import {useLayoutEffect} from "react";
import {goToAdminPage} from "../routes/coordinator";

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            goToAdminPage(history)
        }
    }, [history])
}

export default useUnprotectedPage