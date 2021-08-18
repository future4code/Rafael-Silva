import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";
import {Container, Main, Sidebar} from "./style";

const AdminHomePage = (props) => {
    useProtectedPage()
    const history = useHistory()

    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }

    return (
        <Container>
            <Sidebar>
                <p>teste</p>
                <Button onClick={() => history.push("/")}>Voltar</Button>
                <Button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</Button>
                <Button onClick={logout}>Logout</Button>
            </Sidebar>

            <Main>
                <div>
                    <h1>AdminHomePage</h1>


                    <Button onClick={() => history.push("/admin/trips/:id")}>Details</Button>
                </div>
            </Main>
        </Container>
    )
}

export default AdminHomePage