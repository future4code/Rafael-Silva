import {useHistory} from "react-router-dom";

//Styles
import {Button} from "../../../assets/styles";
import {Background, ContainerButtons, ContainerHalf, MainContainer, SubTitle, Title} from "./styles";
import background1 from "../../../assets/images/background-1.png"

const HomePage = (props) => {
    const history = useHistory()

    return (
        <Background Background={background1}>
            <MainContainer>
                <ContainerHalf>

                    <Title>LabeX</Title>
                    <SubTitle>Encontre as melhores viagens espaciais!</SubTitle>

                    <ContainerButtons>
                        <Button style={{marginRight: `35px` }} onClick={() => history.push("/trips/list")}>Ver Viagens</Button>
                        <Button onClick={() => history.push("/login")}>Área de Admin</Button>
                    </ContainerButtons>

                </ContainerHalf>
            </MainContainer>
        </Background>
    )
}

export default HomePage