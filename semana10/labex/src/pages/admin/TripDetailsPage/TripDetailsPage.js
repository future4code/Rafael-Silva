import {Button} from "../../../assets/styles";
import {useHistory, useParams} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";
import {
    Container,
    Sidebar,
    Main,
    ContainerUser,
    ImageUser,
    UserInfo,
    Hr,
    ContainerButtons
} from "../AdminHomePage/style";
import avatar from "../../../assets/images/avatar.jpg";
import {BackButton, ContainerDetails} from "./styles";

const TripDetailsPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    return (
        <Container>
            <Sidebar>
                <ContainerUser>
                    <ImageUser src={avatar}/>

                    <UserInfo>
                        <p>Admin Name</p>
                    </UserInfo>
                </ContainerUser>

                <Hr/>

                <ContainerButtons>
                    <Button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</Button>
                    <Button onClick={logout}>Logout</Button>
                </ContainerButtons>
            </Sidebar>


            <Main style={{flexDirection: `column`, justifyContent: `center`, alignItems: `flex-start`}}>
                <BackButton>
                    <Button onClick={() => history.goBack()}>Voltar</Button>
                </BackButton>

                <ContainerDetails>
                    <h1>TripDetailsPage</h1>

                </ContainerDetails>
            </Main>
        </Container>
    )
}

export default TripDetailsPage