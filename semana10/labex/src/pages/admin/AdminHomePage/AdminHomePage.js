import {useHistory} from "react-router-dom";

//Styles
import {
    Container,
    Main,
    Sidebar,
    ContainerUser,
    ImageUser,
    UserInfo,
    Hr,
    ContainerButtons,
    ContainerList,
    TripsListContainer
} from "./style";
import trash from "../../../assets/images/delete_black_24dp.svg";
import avatar from "../../../assets/images/avatar.jpg"
import CircularProgress from "@material-ui/core/CircularProgress";


//Requests
import useProtectedPage from "../../../hooks/useProtectedPage";
import useRequestData from "../../../hooks/useRequestData";
import {deleteTrip} from "../../../services/request";


const AdminHomePage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const [allTrips] = useRequestData("/trips", {})

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    const onRemoveTrip = (tripId, tripName) => {
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${tripName}`)) {
            deleteTrip(tripId, history)
        }
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
                    <button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</button>
                    <button onClick={() => history.push("/")}>Voltar</button>
                    <button onClick={logout}>Logout</button>
                </ContainerButtons>
            </Sidebar>

            <Main>
                <ContainerList>

                    {allTrips && allTrips.trips
                        ? allTrips.trips.map((trip) => {
                            return (
                                <TripsListContainer key={trip.id}
                                                    onClick={() => history.push(`/admin/trips/${trip.id}`)}>
                                    <p>{trip.name}</p>
                                    <img onClick={() => onRemoveTrip(trip.id, trip.name)} src={trash} alt="delete"/>
                                </TripsListContainer>
                            )
                        })
                        :
                        <CircularProgress color="secondary"/>
                    }
                </ContainerList>
            </Main>
        </Container>
    )
}

export default AdminHomePage