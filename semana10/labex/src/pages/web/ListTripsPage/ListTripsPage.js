import {useHistory} from "react-router-dom";

//Styles
import {Button} from "../../../assets/styles";
import {Background, CardHeader, Cards, CardsItem, Header, Navigation} from "./styles";
import background2 from "../../../assets/images/background-2.png"
import ListTrips from "../../../components/ListTrips/ListTrips";

//Requests
import useRequestData from "../../../hooks/useRequestData";
import {CONF_BASE_URL} from "../../../constants/urls";

const ListTripsPage = (props) => {
    const history = useHistory()
    const [trips, error, loader] = useRequestData(`${CONF_BASE_URL}/trips`)

    console.log(trips)
    return (
        <Background Background={background2}>
            <Header>
                <h2>LabeX</h2>
            </Header>

            <Navigation>
                <Button style={{marginRight: `60px`}} onClick={() => history.push("/")}>Voltar</Button>
                <Button onClick={() => history.push("/trips/application")}>Inscrever-se</Button>
            </Navigation>

            <CardHeader>
                <h3>Lista de Viagens</h3>
            </CardHeader>

            <Cards>

                {trips && trips.trips.map((trip) => {
                    return (
                        <CardsItem key={trip.id}>
                            <ListTrips
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