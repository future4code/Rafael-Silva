import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";
import {Container, Sidebar, Main} from "../AdminHomePage/style";

const TripDetailsPage = (props) => {
    useProtectedPage()
    const history = useHistory()

    return (
        <Container>
            <Sidebar>
                <p>teste</p>
            </Sidebar>
            <Main>
                <div>
                    <h1>TripDetailsPage</h1>
                    <Button onClick={() => history.goBack()}>Voltar</Button>
                </div>
            </Main>
        </Container>
    )
}

export default TripDetailsPage