//Styles
import {CardInfos, ThreeDimensionsCard} from "./styles";


const ListTrips = (props) => {

    return (
        <ThreeDimensionsCard>
            <CardInfos>
                <p>
                    <span>Nome: </span>
                    {props.Trip.name}
                </p>

                <p>
                    <span>Descrição: </span>
                    {props.Trip.description}
                </p>

                <p>
                    <span>Planeta: </span>
                    {props.Trip.planet}
                </p>

                <p>
                    <span>Duração:</span>
                    {props.Trip.durationInDays} Dias
                </p>

                <p>
                    <span>Data:</span>
                    {props.Trip.date}
                </p>
            </CardInfos>
        </ThreeDimensionsCard>
    )
}

export default ListTrips