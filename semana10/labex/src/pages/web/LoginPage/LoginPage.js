import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const LoginPage = (props) => {
    const history = useHistory()
    return (
        <>
            <div>
                <h1>LoginPage</h1>
                <Button onClick={() => history.goBack()}>Voltar</Button>
                <Button onClick={() => history.push("/admin/trips/list")}>Entrar</Button>
            </div>
        </>
    )
}

export default LoginPage