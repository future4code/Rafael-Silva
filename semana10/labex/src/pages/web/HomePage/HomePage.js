import {useHistory} from "react-router-dom";

//Styles
import {Background, ContainerButtons, ContainerHalf, MainContainer, SubTitle, Title} from "./styles";
import background1 from "../../../assets/images/background-1.png"

const HomePage = () => {
    const history = useHistory()

    return (
        <Background Background={background1}>
            <MainContainer>
                <ContainerHalf>

                    <Title>LabeX</Title>
                    <SubTitle>Encontre as melhores viagens espaciais!</SubTitle>

                    <ContainerButtons>
                        <button style={{marginRight: `35px` }} onClick={() => history.push("/trips/list")}>Ver Viagens</button>
                        <button onClick={() => history.push("/login")}>Área de Admin</button>
                    </ContainerButtons>

                </ContainerHalf>
            </MainContainer>
        </Background>
    )
}

export default HomePage