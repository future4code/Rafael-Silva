import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar'
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button'
import { goToLogin, goToFeedPage} from "../../routes/coordinator"
import {useHistory, useLocation} from "react-router-dom"
import GlobalContext from "../../global/GlobalContext";

const Header = () => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    const location = useLocation()
    const {states, setters} = useContext(GlobalContext)

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token){
            logout()
            setters.setRightButtonText("Logout")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeedPage(history)} color="primary" variant={"contained"}>
                    {location.pathname !== "/" ? "Voltar" : "LabEddit"}
                </Button>
                <Button onClick={rightButtonAction} color="primary" variant={"outlined"}>{states.rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
