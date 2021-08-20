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

//Requests
import {logout} from "../../../services/request";
import CircularProgress from "@material-ui/core/CircularProgress";

const TripDetailsPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const [allTrip, getTripDetails] = useRequestData(`/trip/${params.id}`, {})


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

                        {allTrip && allTrip.trip
                            ? (
                                <TripDetails
                                    Trip={allTrip.trip}
                                    GetTripDetails={getTripDetails}
                                />
                            )
                            : <CircularProgress color="secondary"/>
                        }

                    </Cards>
                </ContainerDetails>
            </Main>
        </Container>
    )
}

export default TripDetailsPage