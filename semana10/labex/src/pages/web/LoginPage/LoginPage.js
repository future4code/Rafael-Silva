import {useState} from "react";
import {useHistory} from "react-router-dom";

import {Button} from "../../../assets/styles";
import {Row, RowCell, Title, SubTitle} from "./styles";
import Login from "../../../components/Login/Login";
import {CONF_BASE_URL} from "../../../constants/urls";
import axios from "axios";
import useProtectedPage from "../../../hooks/useProtectedPage";


const LoginPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitLogin = async () => {
        if (email === "") {
            alert("Ooops! Informe o e-mail entrar")

            setEmail("")
            setPassword("")
        } else if (password === "") {
            alert("Ooops! Informe a senha para entrar")

            setEmail("")
            setPassword("")
        } else {
            const body = {
                email: email,
                password: password
            }

            try {
                const response = await axios.post(`${CONF_BASE_URL}/login`, body)

                localStorage.setItem("token", response.data.token)
                setEmail("")
                setPassword("")
                history.push("/admin/trips/list")
            } catch (e) {
                alert(e.response.data.message)
                setEmail("")
                setPassword("")
            }
        }
    }

    return (
        <Row>
            <RowCell>

                <Title>LabeX</Title>
                <SubTitle>Encontre as melhores viagens espaciais!</SubTitle>
                <Button style={{padding: `20px 40px`}} onClick={() => history.push("/")}>Voltar</Button>

            </RowCell>

            <RowCell style={{background: `#895061`, borderRadius: `20px`}}>
                <h3 style={{color: `#FFF`, marginBottom: `20px`, fontSize: `54px`, fontWeight: `500`}}>Login</h3>
                <Login
                    Email={email}
                    Password={password}
                    onChangeEmail={onChangeEmail}
                    onChangePassword={onChangePassword}
                />
                <Button style={{padding: `20px 40px`}} onClick={onSubmitLogin}>Entrar</Button>

            </RowCell>
        </Row>
    )
}

export default LoginPage