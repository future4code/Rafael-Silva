import background1 from "../../../assets/images/background-1.png";
import {Background, ContainerButtons, ContainerHalf, MainContainer, SubTitle, Title} from "../HomePage/styles";
import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const ErrorPage = () => {
    const history = useHistory()

    return (
        <Background Background={background1}>
            <MainContainer>
                <ContainerHalf>

                    <Title>Ooops!</Title>
                    <SubTitle>Sentimos muito, mas o conteúdo que você tentou acessar não existe, está indisponível no momento ou foi removido :/</SubTitle>

                    <ContainerButtons>
                        <Button style={{marginRight: `35px` }} onClick={() => history.push("/")}>Voltar para Home</Button>
                    </ContainerButtons>

                </ContainerHalf>
            </MainContainer>
        </Background>
    )
}

export default ErrorPage