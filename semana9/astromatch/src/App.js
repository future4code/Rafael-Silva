import {useEffect, useState} from "react";

//styles
import {
    CardContainer,
    CardHeader,
    Container,
    Logo,
    MainContainer,
    Right,
    FooterContainer,
    Buttons,
} from "./assets/App.styles";
import logo from "./assets/images/logo.png"
import left from "./assets/images/left-arrow.png"
import right from "./assets/images/right-arrow.png"

//Requests
import {clearProfilesFromApi, getProfileToChoose} from "./services/request";

//Components
import NewProfile from "./components/NewProfile/NewProfile";


function App() {
    // const [clearprofile, setClearProfile] = useState(false)
    const [changePage, setChangePage] = useState("home")

    const clearProfiles = () => {
        clearProfilesFromApi((data) => alert(data))
        // setClearProfile(!clearprofile)
    }

    const changePages = () => {
        switch (changePage) {
            case "Home":
                <NewProfile
                />

        }
    }

    return (
        <Container>
            <CardContainer>
                <CardHeader>

                    <Logo src={logo} alt="logo astromatch"/>


                    <Right onClick={changePage()} src={right} alt="ir para matches"/>

                </CardHeader>


                <MainContainer>



                </MainContainer>


            </CardContainer>

            <FooterContainer>
                <Buttons>
                    <button onClick={clearProfiles}>Limpar Perfis</button>
                </Buttons>
            </FooterContainer>
        </Container>
    );
}

export default App;
