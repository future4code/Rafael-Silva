import {useHistory, useParams} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";

//Styles
import {Button} from "../../../assets/styles";
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
import {BackButton, Cards, ContainerDetails} from "./styles";

//Components
import TripDetails from "../../../components/TripDetails/TripDetails";
import useRequestData from "../../../hooks/useRequestData";
import {CONF_BASE_URL, HEADERS} from "../../../constants/urls";

const TripDetailsPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const [trip, error, loader] = useRequestData(`${CONF_BASE_URL}/trip/${params.id}`, HEADERS)

    console.log(trip)
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
                    <Cards>
                            <TripDetails

                            />

                    </Cards>
                </ContainerDetails>
            </Main>
        </Container>
    )
}

export default TripDetailsPage