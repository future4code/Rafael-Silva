import {useHistory} from "react-router-dom";
import useProtectedPage from "../../../hooks/useProtectedPage";
import {
    Container,
    ContainerButtons,
    ContainerUser,
    Hr,
    ImageUser,
    Main,
    Sidebar,
    UserInfo
} from "../AdminHomePage/style";
import avatar from "../../../assets/images/avatar.jpg";
import {BackButton, ContainerDetails} from "../TripDetailsPage/styles";

//Requests
import {createTrip, logout} from "../../../services/request";
import {FormContainer} from "../../web/ApplicationFormPage/styles";
import useForm from "../../../hooks/useForm";
import {planets} from "../../../constants/planets";

const CreateTripPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const {form, onChangeForm, cleanFields} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const onCreateTrip = (event) => {
        event.preventDefault()

        createTrip(form, history, cleanFields)
    }

    const date = new Date()
    const stringDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).substr(-2) + "-"
        + ("0" + date.getDate()).substr(-2)

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
                    <button onClick={() => history.push("/admin/trips/create")}>Criar Viagem</button>
                    <button onClick={() => logout(history)}>Logout</button>
                </ContainerButtons>
            </Sidebar>


            <Main style={{display: `block`}}>
                <BackButton>
                    <button onClick={() => history.goBack()}>Voltar</button>
                </BackButton>

                <ContainerDetails>

                    <h1 style={{color: `#FFF`}}>Criar Uma Viagem</h1>

                    <FormContainer>
                        <form onSubmit={onCreateTrip}>

                            <input
                                name={"name"}
                                value={form.name}
                                onChange={onChangeForm}
                                type="text"
                                placeholder="Informe o nome da viagem"
                                required
                                pattern={"^.{3,}"}
                                title={"O nome deve ter no mínimo 3 letras"}
                            />

                            <select
                                name={"planet"}
                                value={form.planet}
                                onChange={onChangeForm}>
                                <option value="" selected disabled>Escolha um planeta</option>
                                {planets.map((planet) => {
                                    return (
                                        <option value={planet} key={planet}>{planet}</option>
                                    )
                                })}
                            </select>

                            <input
                                name={"date"}
                                value={form.date}
                                onChange={onChangeForm}
                                type="date"
                                placeholder="dd/mm/aaaa"
                                required
                                min={stringDate}
                            />

                            <input
                                name={"description"}
                                value={form.description}
                                onChange={onChangeForm}
                                type="text"
                                placeholder="Digite um texto de candidatura"
                                pattern={"^.{20,}$"}
                                title={"O texto deve ter no mínimo 30 caracteres"}
                                required
                            />

                            <input
                                name={"durationInDays"}
                                value={form.durationInDays}
                                onChange={onChangeForm}
                                type="number"
                                placeholder="Duração em dias"
                                required
                            />

                            <div>
                                <button>Criar</button>
                            </div>
                        </form>
                    </FormContainer>

                </ContainerDetails>
            </Main>
        </Container>
    )
}

export default CreateTripPage