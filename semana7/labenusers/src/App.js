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

class App extends React.Component {
    state = {
        clickListUsers: false,
        inputName: "",
        inputEmail: "",
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }


    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, headers)
            .then((response) => {
                this.setState({
                    users: response.data
                })
            }).catch((exception) => {
            alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
        })
    }

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        axios.post(url, body, headers)
            .then((response) => {
                const newUsers = [...this.state.users, response.data]

                alert("Cadastro realizado com sucesso!!")
                this.setState({
                    users: newUsers,
                    clickListUsers: !this.state.clickListUsers,
                    inputName: "",
                    inputEmail: ""
                })

                this.getAllUsers()
            }).catch((exception) => {
            alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
        })
    }

    removeUser = (userId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`

        if (window.confirm("Tem certeza de que deseja deletar?\n")){
            axios.delete(url, headers)
                .then((response) => {
                    const reloadUsers = [...this.state.users, response.data]

                    alert("Usuário removido com sucesso!!")

                    this.setState({
                        users: reloadUsers
                    })

                    this.getAllUsers()
                }).catch((exception) => {
                alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
            })
        }
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
                                Register={this.createUser}
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

                            <ButtonContainer>
                                <button
                                    onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                    Para Cadastro de Usuários
                                </button>
                            </ButtonContainer>


                            <ListUsers
                                UserName={this.state.users}
                                RemoveUser={this.removeUser}
                            />

                        </CenterListUsers>
                    )
                }
            </Container>
        );
    }
}

export default App;
