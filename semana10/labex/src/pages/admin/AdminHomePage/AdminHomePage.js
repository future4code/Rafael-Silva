import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";

const AdminHomePage = (props) => {
    const history = useHistory()

    return (
        <>
            <div>
                <h1>AdminHomePage</h1>
                <Button onClick={() => history.push("/")}>Voltar</Button>
                <Button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</Button>
                <Button onClick={() => history.push("/login")}>Logout</Button>
                <Button onClick={() => history.push("/admin/trips/:id")}>Details</Button>
            </div>
        </>
    )
}

export default AdminHomePage