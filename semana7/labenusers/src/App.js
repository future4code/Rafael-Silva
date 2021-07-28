import React from "react";
import styled from "styled-components";
import axios from "axios";

//Components
import Register from "./components/Register/Register";
import ListUsers from "./components/ListUsers/ListUsers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CenterRegister = styled.div`
  margin-top: 200px;
`

const CenterListUsers = styled.div`
  margin: 20px auto;
  width: 50%;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`

//Global Variables:

//Headers
const headers = {
    headers: {
        Authorization: "rafael-nascimento-silva"
    }
}

//FUNCTIONS

//REQUESTS
export const getAllUsers = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    // axios.get(url, headers)
    //     .then((response) => {
    //         this.setState({
    //             users: response.data.sort()
    //         })
    //     }).catch((exception) => {
    //     alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
    // })

    try {
        const response = await axios.get(url, headers)

        this.setState({
            users: response.data
        })
    } catch (e) {
        alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
    }
}

const createUser = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
    }

    // axios.post(url, body, headers)
    //     .then((response) => {
    //         alert("Cadastro realizado com sucesso!!")
    //         this.setState({
    //             clickListUsers: !this.state.clickListUsers,
    //             inputName: "",
    //             inputEmail: ""
    //         })
    //         this.getAllUsers()
    //     }).catch((exception) => {
    //     alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
    // })

    try {
        await axios.post(url, body, headers)

        alert("Cadastro realizado com sucesso!!")

        this.setState({
            clickListUsers: !this.state.clickListUsers,
            inputName: "",
            inputEmail: ""
        })

        await getAllUsers()
    } catch (e) {
        alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
    }
}

export const removeUser = async (userId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`

    if (window.confirm("Tem certeza de que deseja deletar?\n")) {
        // axios.delete(url, headers)
        //     .then((response) => {
        //         alert("Usuário removido com sucesso!!")
        //
        //         this.getAllUsers()
        //     }).catch((exception) => {
        //     alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
        // })

        try {
            await axios.delete(url, headers)

            alert("Usuário removido com sucesso!!")

            await getAllUsers()
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }
}

class App extends React.Component {
    state = {
        clickListUsers: false,
        inputName: "",
        inputEmail: "",
        users: []
    }

    componentDidMount() {
        // this.getAllUsers()
    }

    onChangeName = (e) => {
        this.setState({inputName: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }

    render() {
        return (
            <Container>
                {this.state.clickListUsers === false
                    ? (
                        <CenterRegister>

                            <Register
                                Register={() => createUser()}
                                onChangeName={this.onChangeName}
                                onChangeEmail={this.onChangeEmail}
                                inputName={this.state.inputName}
                                inputEmail={this.state.inputEmail}
                            />

                            <ButtonContainer>
                                <button
                                    onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                    Para Lista de Usuários
                                </button>
                            </ButtonContainer>

                        </CenterRegister>

                    )
                    : (
                        <CenterListUsers>

                            <ListUsers
                                UserName={this.state.users}
                                RemoveUser={() => removeUser()}
                                BackRegister={() => this.setState({clickListUsers: !this.state.clickListUsers})}
                            />

                        </CenterListUsers>
                    )
                }
            </Container>
        );
    }
}

export default App;