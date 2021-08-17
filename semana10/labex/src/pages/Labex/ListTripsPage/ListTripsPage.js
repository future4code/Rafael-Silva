import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const ListTripsPage = (props) => {
    const history = useHistory()
    return (
        <>
            <div>
                <h1>ListTripsPage</h1>
                <Button onClick={() => history.push("/")}>Voltar</Button>
                <Button onClick={() => history.push("/trips/application")}>Inscrever-se</Button>
            </div>
        </>
    )
}

export default ListTripsPage