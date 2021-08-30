import React, {useState} from "react"
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {goToSignUp} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";
import {ScreenContainer} from "./styled";


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <Box m={5}>
            <Grid container>

                <Grid item xs={6}>
                    <ScreenContainer>
                        <Typography variant={"h4"}>
                            Login
                        </Typography>
                        <LoginForm/>
                        <Button
                            onClick={() => goToSignUp(history)}
                            type={"submit"}
                            fullWidth
                            variant={"text"}
                            color={"primary"}
                        >Não possui conta? Cadastre-se</Button>
                    </ScreenContainer>
                </Grid>

                <Grid item xs={6}>
                    <h1>teste</h1>
                </Grid>

            </Grid>
        </Box>
    )
}

export default LoginPage