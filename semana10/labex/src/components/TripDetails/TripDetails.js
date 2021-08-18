import {CardHeader} from "../../pages/web/ListTripsPage/styles";
import {CardInfos} from "../CardTrips/styles";
import {CardsItem} from "./styles";


const TripDetails = (props) => {
    return (
        <>
        <CardsItem>
            <CardHeader>
                <h3 style={{color: `#000`}}>Teste</h3>
            </CardHeader>

            <CardInfos>
                <p style={{color: `#000`}}>
                    <span>Nome:  </span>
                    teste
                </p>
            </CardInfos>
        </CardsItem>


            <CardsItem>
                <CardHeader>
                    <h3 style={{color: `#000`, fontSize: `30px`}}>Candidatos Aprovados</h3>
                </CardHeader>

                <CardInfos style={{alignItems: `center`}}>
                    <ul>
                        <li>teste</li>
                    </ul>
                </CardInfos>
            </CardsItem>
        </>
    )
}

export default TripDetails