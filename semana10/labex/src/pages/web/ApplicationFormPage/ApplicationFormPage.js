import {useHistory} from "react-router-dom";

//Styles
import {Button} from "../../../assets/styles";
import {Background, Header} from "./styles";
import background3 from "../../../assets/images/background-3.png"

const ApplicationFormPage = () => {
    const history = useHistory()

    return (
        <Background Background={background3}>
            <Header>
                <h2 onClick={() => history.push("/")}>LabeX</h2>

            </Header>
            <div>
                <h1>ApplicationFormPage</h1>
                <Button onClick={() => history.goBack()}>Voltar</Button>
            </div>
        </Background>
    )
}

export default ApplicationFormPage