import React from "react";
import styled from "styled-components";

//Components
import ListUsersItem from "./ListUsersItem";
import UpdateUser from "../UpdateUser/UpdateUser";

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

export default class ListUsers extends React.Component {
    state = {
        clickConfigUser: false,
        user: []
    }

    ConfigUser = (user) => {
        this.setState({
            clickConfigUser: !this.state.clickConfigUser,
            user: user
        })
    }

    render() {
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

                            {this.props.UserName.map((user, index) => {
                                return (
                                    <ListUsersItem
                                        key={index}
                                        UserName={user.name}
                                        RemoveUser={() => this.props.RemoveUser(user.id)}
                                        ConfigUser={() => this.ConfigUser(user)}
                                    />
                                )
                            })}
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

                            {this.props.UserName.filter((user) =>{
                                return user.id === this.state.user.id
                            }).map((user, index) =>{
                                return (
                                    <UpdateUser
                                        key={index}
                                        UserConfig={user}
                                        RemoveUser={() => this.props.RemoveUser(user.id)}
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