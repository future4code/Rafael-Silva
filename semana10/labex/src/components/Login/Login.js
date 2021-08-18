import {FormContainer} from "./styles";


const Login = (props) => {


    return (
        <>
            <FormContainer>
                <p>E-mail: </p>

                <input type="email"
                       value={props.Email}
                       onChange={props.onChangeEmail}
                       placeholder="Informe seu e-mail"
                />
            </FormContainer>

            <FormContainer>
                <p>Senha: </p>

                <input type="password"
                       value={props.Password}
                       onChange={props.onChangePassword}
                       placeholder="Informe sua senha"
                />
            </FormContainer>
        </>
    )
}

export default Login