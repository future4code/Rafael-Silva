import {Container} from "./styles";
import trash from "../../assets/images/delete_black_24dp.svg"

const TripName = (props) => {
    return (
        <Container onClick={props.TripDetail}>
            <p>{props.TripName}</p>
            <img src={trash} alt="delete"/>
        </Container>
    )
}

export default TripName