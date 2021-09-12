import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar'
import {
    // SearchContainer,
    StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button'
import {goToLogin, goToFeedPage} from "../../routes/coordinator"
import {useHistory, useLocation} from "react-router-dom"
import GlobalContext from "../../global/GlobalContext";
// import TextField from "@material-ui/core/TextField";
// import SearchIcon from '@material-ui/icons/Search';
// import {IconButton} from "@material-ui/core";

const Header = (props) => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    const location = useLocation()
    const {states, setters} = useContext(GlobalContext)

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
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

                {/*{props.Search === true*/}
                {/*    ? <>*/}
                {/*        <SearchContainer>*/}
                {/*            <TextField*/}
                {/*                name={"search"}*/}
                {/*                value={states.search.search}*/}
                {/*                onChange={setters.setSearch}*/}
                {/*                label={"Buscar"}*/}
                {/*                variant={"outlined"}*/}
                {/*                margin={"normal"}*/}
                {/*                type={"text"}*/}
                {/*                style={{marginRight: "20px", width: "40%"}}*/}
                {/*            />*/}
                {/*            <IconButton*/}
                {/*                onClick={() => DeletePostVote(post.id)}*/}
                {/*                aria-label="deleteVote">*/}
                {/*                <SearchIcon color={"primary"}/>*/}
                {/*        */}
                {/*            </IconButton>*/}
                {/*        </SearchContainer>*/}
                {/*    </>*/}
                {/*    : ""}*/}

                <Button onClick={rightButtonAction} color="primary"
                        variant={"outlined"}>{states.rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
