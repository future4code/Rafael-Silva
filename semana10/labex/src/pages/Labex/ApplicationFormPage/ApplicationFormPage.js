import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const ApplicationFormPage = (props) => {
    const history = useHistory()

    return (
        <>
            <div>
                <h1>ApplicationFormPage</h1>
                <Button onClick={() => history.goBack()}>Voltar</Button>
            </div>
        </>
    )
}

export default ApplicationFormPage