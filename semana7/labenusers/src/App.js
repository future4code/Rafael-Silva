import React from "react";
import * as All from "./App.styles"
import axios from "axios";

//Components
import Register from "./components/Register/Register";
import ListUsers from "./components/ListUsers/ListUsers";

//Headers
export const headers = {
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

    getAllUsers = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        // axios.get(url, headers)
        //     .then((response) => {
        //         this.setState({
        //             users: response.data
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

    createUser = async () => {
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

            await this.getAllUsers()
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    removeUser = async (userId) => {
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

                await this.getAllUsers()
            } catch (e) {
                alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
            }
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
            <All.Container>
                {this.state.clickListUsers === false
                    ? (
                        <All.CenterRegister>

                            <Register
                                Register={() => this.createUser()}
                                onChangeName={this.onChangeName}
                                onChangeEmail={this.onChangeEmail}
                                inputName={this.state.inputName}
                                inputEmail={this.state.inputEmail}
                            />

                            <All.ButtonContainer>
                                <button
                                    onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                    Para Lista de Usuários
                                </button>
                            </All.ButtonContainer>

                        </All.CenterRegister>

                    )
                    : (
                        <All.CenterListUsers>

                            <ListUsers
                                UserName={this.state.users}
                                RemoveUser={this.removeUser}
                                BackToRegister={() => this.setState({clickListUsers: !this.state.clickListUsers})}
                            />

                        </All.CenterListUsers>
                    )
                }
            </All.Container>
        );
    }
}

export default App;