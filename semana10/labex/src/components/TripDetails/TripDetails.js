import {CardHeader} from "../../pages/web/ListTripsPage/styles";
import {CardInfos} from "../CardTrips/styles";
import {ButtonsChoice, CardsItem} from "./styles";
import {Hr} from "../../pages/admin/AdminHomePage/style";


const TripDetails = (props) => {
    return (
        <>
            <CardsItem style={{flexBasis: `45%`}}>
                <CardHeader>
                    <h3 style={{color: `#000`}}>{props.Trip.name}</h3>
                </CardHeader>

                <CardInfos>
                    <p style={{color: `#000`}}>
                        <span>Nome:  </span>
                        {props.Trip.name}
                    </p>

                    <p style={{color: `#000`}}>
                        <span>Descrição: </span>
                        {props.Trip.description}
                    </p>

                    <p style={{color: `#000`}}>
                        <span>Planeta: </span>
                        {props.Trip.planet}
                    </p>

                    <p style={{color: `#000`}}>
                        <span>Duração:</span>
                        {props.Trip.durationInDays} Dias
                    </p>

                    <p style={{color: `#000`}}>
                        <span>Data:</span>
                        {props.Trip.date}
                    </p>
                </CardInfos>
            </CardsItem>


            <CardsItem style={{flexBasis: `45%`}}>
                <CardHeader>
                    <h3 style={{color: `#000`, fontSize: `30px`}}>Candidatos Aprovados</h3>
                </CardHeader>

                <CardInfos style={{alignItems: `center`}}>
                    <ul>
                        <li>teste</li>
                    </ul>
                </CardInfos>
            </CardsItem>

            <Hr/>

            {props.Trip.candidates &&
            props.Trip.candidates.map((candidate) => {
                return (
                    <CardsItem key={candidate.id} style={{marginTop: `30px`, flexBasis: `100%`}}>
                        <CardHeader>
                            <h3 style={{color: `#000`, fontSize: `26px`}}>Candidatos Pendentes</h3>
                        </CardHeader>

                        <CardInfos>
                            <p style={{color: `#000`}}>
                                <span>Nome:  </span>
                                {candidate.name}
                            </p>

                            <p style={{color: `#000`}}>
                                <span>Profissão: </span>
                                {candidate.profession}
                            </p>

                            <p style={{color: `#000`}}>
                                <span>Idade: </span>
                                {candidate.age}
                            </p>

                            <p style={{color: `#000`}}>
                                <span>País:</span>
                                {candidate.country}
                            </p>

                            <p style={{color: `#000`}}>
                                <span>Texto de Candidatura:</span>
                                {candidate.applicationText}
                            </p>
                        </CardInfos>
                        <ButtonsChoice>
                            <button>Recusar</button>
                            <button>Aprovar</button>
                        </ButtonsChoice>
                    </CardsItem>
                )
            })
            }
        </>
    )
}

export default TripDetails