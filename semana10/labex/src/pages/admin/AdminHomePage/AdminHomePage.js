import {useHistory} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";
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
import avatar from "../../../assets/images/avatar.jpg"
import useRequestData from "../../../hooks/useRequestData";
import {CONF_BASE_URL} from "../../../constants/urls";
import {deleteTrip} from "../../../services/request";
import trash from "../../../assets/images/delete_black_24dp.svg";


const AdminHomePage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const [allTrips, error, loader] = useRequestData(`${CONF_BASE_URL}/trips`, {})

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    const onRemoveTrip = (tripId, tripName) => {
        if(window.confirm(`Tem certeza que deseja deletar a viagem ${tripName}`)){
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

                    {allTrips && allTrips.trips.map((trip) => {
                        return (
                            <TripsListContainer key={trip.id} onClick={() => history.push(`/admin/trips/${trip.id}`)}>
                                <p>{trip.name}</p>
                                <img onClick={() => onRemoveTrip(trip.id, trip.name)} src={trash} alt="delete"/>
                            </TripsListContainer>
                        )
                    })}
                </ContainerList>
            </Main>
        </Container>
    )
}

export default AdminHomePage