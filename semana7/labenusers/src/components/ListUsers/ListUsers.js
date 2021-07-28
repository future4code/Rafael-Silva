import React from "react";
import styled from "styled-components";

//Components
import ListUsersItem from "./ListUsersItem";
import UpdateUser from "../UpdateUser/UpdateUser";

//RESQUESTs
import {headers} from "../../App";
import axios from "axios";

const ContainerUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //padding: 20px;
  //margin-bottom: 0;

`

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  height: 100%;
  padding: 5px;

  //h2 {
  //  margin-top: 0;
  //  padding-top: 0;
  //}
`

const UserConfig = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  width: 80vw;
  height: 100%;
  padding: 5px;
  //border: 1px solid #2D4051;
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

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  border: 1px solid #2D4051;
  width: 100%;
  padding: 10px;

  input {
    padding: 10px;
  }

  button {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`

export default class ListUsers extends React.Component {
    state = {
        clickConfigUser: false,
        user: [],
        search: false,
        searchInput: "",
        searchUser: []
    }


    getUserById = async (userId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`

        try {
            const response = await axios.get(url, headers)

            this.setState({
                clickConfigUser: !this.state.clickConfigUser,
                user: [response.data]
            })
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    searchUsers = async (userName) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${userName}&email=`

        try {
            const response = await axios.get(url, headers)
            this.setState({
                search: true,
                searchInput: "",
                // searchUser: [response.data]
                user: response.data

            })
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }


    render() {
        console.log(this.state.user)
        return (
            <ContainerUsers>

                {this.state.clickConfigUser === false
                    ? (
                        <List>
                            <ButtonContainer>
                                <button
                                    onClick={this.props.BackToRegister}>
                                    Voltar Para Cadastro de Usuários
                                </button>
                            </ButtonContainer>

                            <h2>Lista de Usuários</h2>


                            <Search>
                                <input type="text"
                                       value={this.state.searchInput}
                                       onChange={(e) => this.setState({searchInput: e.target.value})}
                                       placeholder={"Buscar nome"}
                                />

                                <button onClick={() => this.searchUsers(this.state.searchInput)}>Buscar</button>
                            </Search>

                            {this.state.search === true
                                ? (
                                    this.state.user.map((user, index) => {
                                        return (
                                            <ListUsersItem
                                                key={index}
                                                UserName={user.name}
                                                RemoveUser={() => this.props.RemoveUser(user.id)}
                                                ConfigUser={() => this.getUserById(user.id)}
                                            />
                                        )
                                    })
                                )
                                : (
                                    this.props.UserName.map((user, index) => {
                                        return (
                                            <ListUsersItem
                                                key={index}
                                                UserName={user.name}
                                                RemoveUser={() => this.props.RemoveUser(user.id)}
                                                ConfigUser={() => this.getUserById(user.id)}
                                            />
                                        )
                                    })
                                )}


                        </List>
                    )
                    : (
                        <UserConfig>
                            <ButtonContainer>
                                <button
                                    onClick={() => this.setState({clickConfigUser: !this.state.clickConfigUser})}>
                                    Voltar Para Lista De Usuários
                                </button>
                            </ButtonContainer>

                            <h2>Detalhes do Usuário</h2>

                            {this.state.user.map((user, index) => {
                                return (
                                    <UpdateUser
                                        key={index}
                                        UserConfig={user}
                                        RemoveUser={() => this.props.RemoveUser(user.id)}
                                        ReloadList={this.props.ReloadList}
                                        // BackToList={() => this.setState({clickConfigUser: !this.state.clickConfigUser})}
                                    />
                                )
                            })}

                        </UserConfig>
                    )
                }


            </ContainerUsers>
        )
    }
}