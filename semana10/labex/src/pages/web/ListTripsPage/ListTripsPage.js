import {useHistory} from "react-router-dom";

//Styles
import {Background, CardHeader, Cards, CardsItem, Header, Navigation} from "./styles";
import background2 from "../../../assets/images/background-2.png"
import CardTrip from "../../../components/CardTrips/CardTrip";
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';


//Requests
import useRequestData from "../../../hooks/useRequestData";


export const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const ListTripsPage = () => {
    const history = useHistory()
    const [allTrips] = useRequestData("/trips", {})
    const classes = useStyles();

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

                {allTrips && allTrips.trips
                    ? allTrips.trips.map((trip) => {
                        return (
                            <CardsItem key={trip.id}>
                                <CardTrip
                                    Trip={trip}
                                />
                            </CardsItem>
                        )
                    })
                    :
                    <Backdrop className={classes.backdrop} open>
                        <CircularProgress color="secondary"/>
                    </Backdrop>
                }


            </Cards>
        </Background>
    )
}

export default ListTripsPage