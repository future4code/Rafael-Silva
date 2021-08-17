import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const CreateTripPage = (props) => {
    const history = useHistory()

    return (
        <>
            <div>
                <h1>CreateTripPage</h1>
                <Button onClick={() => history.goBack()}>Voltar</Button>
                <Button >Criar</Button>
            </div>
        </>
    )
}

export default CreateTripPage