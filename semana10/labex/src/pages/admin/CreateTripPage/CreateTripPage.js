import {useHistory} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";

const CreateTripPage = (props) => {
    useProtectedPage()
    const history = useHistory()

    return (
        <>
            <div>
                <h1>CreateTripPage</h1>
                <button onClick={() => history.goBack()}>Voltar</button>
                <button >Criar</button>
            </div>
        </>
    )
}

export default CreateTripPage