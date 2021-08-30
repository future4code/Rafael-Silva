import {useHistory} from "react-router-dom";
import {useState} from "react";

//Styles
import {Background, Header, Container, FormContainer} from "./styles";
import background3 from "../../../assets/images/background-3.png"
import {useStyles} from "../ListTripsPage/ListTripsPage";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

//Components
import useForm from "../../../hooks/useForm";

//Requests
import useRequestData from "../../../hooks/useRequestData";
import {sendApplication} from "../../../services/request";
import Countrys from "../../../constants/Countrys";

const ApplicationFormPage = () => {
    const history = useHistory()
    const {form, onChangeForm, cleanFields} = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })
    const [allTrips] = useRequestData("/trips", {})
    const [tripId, setTripId] = useState("")
    const classes = useStyles();


    const clear = () => {
        cleanFields()
        setTripId("")
    }

    const onCadidate = (event) => {
        event.preventDefault()

        sendApplication(form, tripId, clear)
    }

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const optionsTrip = allTrips && allTrips.trips && allTrips.trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>{trip.name} - {trip.planet}</option>
        )
    })

    return (
        <Background Background={background3}>
            <Header>
                <h2 onClick={() => history.push("/")}>LabeX</h2>
            </Header>

            {allTrips && allTrips.trips ?
                <Container>
                    <h1 style={{color: `#FFF`}}>Inscreva-se para uma viagem</h1>

                    <FormContainer>
                        <form onSubmit={onCadidate}>
                            <select
                                defaultValue=""
                                onChange={onChangeTrip}>
                                <option value="" selected disabled>Escolha uma viagem</option>
                                {optionsTrip}
                            </select>

                            <input
                                name={"name"}
                                value={form.name}
                                onChange={onChangeForm}
                                type="text"
                                placeholder="Informe Seu Nome"
                                required
                                pattern={"^.{3,}"}
                                title={"O nome deve ter no mínimo 3 letras"}
                            />

                            <input
                                name={"age"}
                                value={form.age}
                                onChange={onChangeForm}
                                type="number"
                                placeholder="Informe Sua Idade"
                                required
                                min="18"
                            />

                            <input
                                name={"applicationText"}
                                value={form.applicationText}
                                onChange={onChangeForm}
                                type="text"
                                placeholder="Digite um texto de candidatura"
                                pattern={"^.{20,}$"}
                                title={"O texto deve ter no mínimo 30 caracteres"}
                                required
                            />

                            <input
                                name={"profession"}
                                value={form.profession}
                                onChange={onChangeForm}
                                type="text"
                                placeholder="Informe Sua Profissão"
                                required
                                pattern="^.{3,}$"
                                title="A profissão deve ter no mínimo 10 caracteres"
                            />

                            <select
                                name={"country"}
                                value={form.country}
                                onChange={onChangeForm}
                                required
                            >
                                <option value="" selected disabled>Informe seu País</option>
                                <Countrys/>
                            </select>

                            <div>
                                <button onClick={() => history.goBack()}>Voltar</button>
                                <button>Enviar</button>
                            </div>
                        </form>
                    </FormContainer>
                </Container>
                :
                <Backdrop className={classes.backdrop} open>
                    <CircularProgress color="secondary"/>
                </Backdrop>
            }
        </Background>
    )
}

export default ApplicationFormPage