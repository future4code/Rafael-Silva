import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const TripDetailsPage = (props) => {
    const history = useHistory()

    return (
        <>
            <div>
                <h1>TripDetailsPage</h1>
                <Button onClick={() => history.goBack()}>Voltar</Button>
            </div>
        </>
    )
}

export default TripDetailsPage