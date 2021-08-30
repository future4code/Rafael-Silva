import {useHistory} from "react-router-dom";
import {useState} from "react";

//Styles
import {FormContainer} from "./styles";
import {Row, RowCell, Title, SubTitle} from "./styles";
import {useStyles} from "../ListTripsPage/ListTripsPage";

//Components
import useForm from "../../../hooks/useForm";

//Requests
import {login} from "../../../services/request";
import useUnprotectedPage from "../../../hooks/useUnprotectedPage";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import {goToAdminPage} from "../../../routes/coordinator";


const LoginPage = (props) => {
    useUnprotectedPage()
    const history = useHistory()
    const {form, onChangeForm, cleanFields} = useForm({
        email: "",
        password: ""
    })
    const [loader, setLoader] = useState(false)
    const classes = useStyles();


    const onSubmitLogin = (e) => {
        e.preventDefault()

        setLoader(true)

        login(form, (data) => {
            localStorage.setItem("token", data)
            cleanFields()
            setLoader(false)
            window.location.reload()
            goToAdminPage(history)
        })
    }


    return (
        <Row>
            <RowCell>
                <Title>LabeX</Title>
                <SubTitle>Encontre as melhores viagens espaciais!</SubTitle>
                <button style={{padding: `20px 40px`}} onClick={() => history.push("/")}>Voltar</button>

            </RowCell>

            <RowCell style={{background: `#895061`, borderRadius: `20px`}}>
                <h3 style={{color: `#FFF`, marginBottom: `20px`, fontSize: `54px`, fontWeight: `500`}}>Login</h3>

                {loader === true
                    ? (
                        <Backdrop className={classes.backdrop} open>
                            <CircularProgress color="secondary"/>
                        </Backdrop>
                    )
                    : (
                        <form onSubmit={onSubmitLogin}>
                            <FormContainer>
                                <p>E-mail: </p>

                                <input
                                    name={"email"}
                                    type={"email"}
                                    value={form.email}
                                    onChange={onChangeForm}
                                    placeholder="Informe seu e-mail"
                                    required
                                />
                            </FormContainer>

                            <FormContainer>
                                <p>Senha: </p>

                                <input
                                    name={"password"}
                                    type={"password"}
                                    value={form.password}
                                    onChange={onChangeForm}
                                    placeholder="Informe sua senha"
                                    required
                                />
                            </FormContainer>

                            <button style={{padding: `20px 40px`}} type={"submit"}>Entrar</button>
                        </form>
                    )}
            </RowCell>
        </Row>
    )
}

export default LoginPage