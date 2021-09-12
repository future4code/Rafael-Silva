import React from "react"
import {Button, Typography} from "@material-ui/core";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {ElementLogin, ImageSidebar, LoginContainer, MainContainer} from "../LoginPage/styled";
import SignUpForm from "./SignUpForm";
import {goToLogin} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import Slider from "react-animated-slider";
import youtube from "../../assets/Youtube_tutoria.svg";
import blogging from "../../assets/blogging.svg";
import hello from "../../assets/Hello.svg";

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <LoginContainer>
                <ElementLogin>
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
                </ElementLogin>

                <Slider previousButton nextButton autoplay={1500}>
                    <ImageSidebar src={hello}/>
                    <ImageSidebar src={blogging}/>
                    <ImageSidebar src={youtube}/>
                </Slider>

            </LoginContainer>
        </MainContainer>


        // <Box m={5}>
        //     <Grid container>
        //
        //         <Grid item xs={6}>
        //             <MainContainer>
        //                 <Typography variant={"h4"}>
        //                     Criar Conta:
        //                 </Typography>
        //
        //                 <SignUpForm/>
        //
        //                 <Button
        //                     onClick={() => goToLogin(history)}
        //                     type={"submit"}
        //                     fullWidth
        //                     variant={"text"}
        //                     color={"primary"}
        //                 >Já Possui conta? Faça Login</Button>
        //             </MainContainer>
        //         </Grid>
        //
        //         <Grid item xs={6}>
        //             <h1>teste</h1>
        //         </Grid>
        //
        //     </Grid>
        // </Box>

    )
}

export default SignUpPage