import {Button} from "../../../assets/styles";
import {useHistory} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";
import {Container, Main, Sidebar, ContainerUser, ImageUser, UserInfo, Hr, ContainerButtons} from "./style";
import avatar from "../../../assets/images/avatar.jpg"

const AdminHomePage = (props) => {
    useProtectedPage()
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    return (
        <Container>
            <Sidebar>
                <ContainerUser>
                    <ImageUser src={avatar}/>

                    <UserInfo>
                        <p>Admin Name</p>
                    </UserInfo>
                </ContainerUser>

                <Hr/>

                <ContainerButtons>
                    <Button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</Button>
                    <Button onClick={() => history.push("/")}>Voltar</Button>
                    <Button onClick={logout}>Logout</Button>
                </ContainerButtons>
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