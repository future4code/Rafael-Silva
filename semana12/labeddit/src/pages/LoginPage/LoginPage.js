import React from "react"
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {goToSignUp} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";
import {ImageSidebar, ScreenContainer} from "./styled";

import posts from "../../assets/posts.svg"

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <Box m={10}>
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
                    <Box>
                        <ImageSidebar src={posts}/>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default LoginPage