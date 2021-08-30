import React, {useState} from "react"
import {Box, Button, Grid, Typography} from "@material-ui/core";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {ScreenContainer} from "../LoginPage/styled";
import SignUpForm from "./SignUpForm";
import {goToLogin} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <Box m={5}>
            <Grid container>

                <Grid item xs={6}>
                    <ScreenContainer>
                        <Typography variant={"h4"}>
                            Criar Conta:
                        </Typography>

                        <SignUpForm/>

                        <Button
                            onClick={() => goToLogin(history)}
                            type={"submit"}
                            fullWidth
                            variant={"text"}
                            color={"primary"}
                        >Já Possui conta? Faça Login</Button>
                    </ScreenContainer>
                </Grid>

                <Grid item xs={6}>
                    <h1>teste</h1>
                </Grid>

            </Grid>
        </Box>

    )
}

export default SignUpPage