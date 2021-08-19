import {useHistory} from "react-router-dom";

//Styles
import {Background, CardHeader, Cards, CardsItem, Header, Navigation} from "./styles";
import background2 from "../../../assets/images/background-2.png"
import CardTrip from "../../../components/CardTrips/CardTrip";

//Requests
import useRequestData from "../../../hooks/useRequestData";
import {CONF_BASE_URL} from "../../../constants/urls";

const ListTripsPage = () => {
    const history = useHistory()
    const [trips, error, loader] = useRequestData(`${CONF_BASE_URL}/trips`, {})

    return (
        <Background Background={background2}>
            <Header>
                <h2 onClick={() => history.push("/")}>LabeX</h2>
            </Header>

            <Navigation>
                <button style={{marginRight: `60px`}} onClick={() => history.push("/")}>Voltar</button>
                <button onClick={() => history.push("/trips/application")}>Inscrever-se</button>
            </Navigation>

            <CardHeader>
                <h3>Lista de Viagens</h3>
            </CardHeader>

            <Cards>

                {trips && trips.trips.map((trip) => {
                    return (
                        <CardsItem key={trip.id}>
                            <CardTrip
                                Trip={trip}
                            />
                        </CardsItem>
                    )
                })}


            </Cards>
        </Background>
    )
}

export default ListTripsPage