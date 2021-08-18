import {Button} from "../../../assets/styles";
import {useHistory, useParams} from "react-router-dom";
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
    ContainerList
} from "./style";
import avatar from "../../../assets/images/avatar.jpg"
import TripName from "../../../components/CardTrips/TripName";
import useRequestData from "../../../hooks/useRequestData";
import {CONF_BASE_URL} from "../../../constants/urls";


const AdminHomePage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const [trips, error, loader] = useRequestData(`${CONF_BASE_URL}/trips`)

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
                    <Button onClick={() => history.push("/")}>Voltar</Button>
                    <Button onClick={logout}>Logout</Button>
                </ContainerButtons>
            </Sidebar>

            <Main>
                <ContainerList>

                    {trips && trips.trips.map((trip) => {
                        return (
                            <TripName
                                TripName={trip.name}
                                TripDetail={() => history.push(`/admin/trips/${trip.id}`)}
                            />
                        )
                    })}
                </ContainerList>
            </Main>
        </Container>
    )
}

export default AdminHomePage