import React from "react"
import {Button, Typography} from "@material-ui/core";
import {goToSignUp} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from "./LoginForm";
import {ElementLogin, ImageSidebar, LoginContainer, MainContainer} from "./styled";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import posts from "../../assets/posts.svg"
import blogging from "../../assets/blogging.svg"
import notification from "../../assets/Push_notifications.svg"


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <LoginContainer>
                <ElementLogin>
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
                    >Não possui conta? Cadastre-se
                    </Button>
                </ElementLogin>

                <Slider previousButton nextButton autoplay={1500}>
                    <ImageSidebar src={posts}/>
                    <ImageSidebar src={blogging}/>
                    <ImageSidebar src={notification}/>
                </Slider>

            </LoginContainer>
        </MainContainer>
    )
}

export default LoginPage