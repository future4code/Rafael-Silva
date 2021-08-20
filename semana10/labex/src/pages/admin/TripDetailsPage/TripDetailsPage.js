import {useHistory, useParams} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";

//Styles
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

//Requests
import {logout} from "../../../services/request";

const TripDetailsPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const [allTrip, error, loader, getTripDetails] = useRequestData(`${CONF_BASE_URL}/trip/${params.id}`, HEADERS)



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
                    <button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</button>
                    <button onClick={() => logout(history)}>Logout</button>
                </ContainerButtons>
            </Sidebar>


            <Main style={{display: `block`}}>
                <BackButton>
                    <button onClick={() => history.goBack()}>Voltar</button>
                </BackButton>

                <ContainerDetails>

                    <Cards>
                        {allTrip &&
                        <TripDetails
                            Trip={allTrip.trip}
                            GetTripDetails={getTripDetails}
                        />

                        }

                    </Cards>
                </ContainerDetails>
            </Main>
        </Container>
    )
}

export default TripDetailsPage