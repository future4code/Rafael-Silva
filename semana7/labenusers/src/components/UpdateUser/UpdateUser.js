import React from "react";
import styled from "styled-components";

//Components
import UpdateUserConfig from "./UpdateUserConfig";


const ContainerUpdate = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  padding: 20px;
  //border: 1px solid #2D4051;
  width: 100%;

  div {
    width: 100%;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #2D4051;
`

const DeleteButton = styled.button`
  
  margin: 10px;

  padding: 10px;
  border-radius: 5px;
  background-color: red;
  color: #000;

  :hover {
    cursor: pointer;
    color: #FFF;
  }

`

const UpdateButton = styled.button`
  margin: 10px;

  padding: 10px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    color: #D36833;
  }

`

export default class UpdateUser extends React.Component {
    state = {
        backToList: false,
        updateName: this.props.UserConfig.name,
        updateEmail: this.props.UserConfig.email,
        showButtonEdit: false
    }

    UpdateUser = () => {

    }

    onChangeUpdateName = (e) => {
        this.setState({
            updateName: e.target.value,
            showButtonEdit: !this.state.showButtonEdit
        })
    }

    onChangeUpdateEmail = (e) => {
        this.setState({
            updateEmail: e.target.value,
            showButtonEdit: !this.state.showButtonEdit
        })
    }

    render() {
        return (
            <ContainerUpdate>
                {this.state.backToList === false
                    ? (
                        <div>
                            <div>
                                <UpdateUserConfig
                                    UserName={this.state.updateName}
                                    UserEmail={this.state.updateEmail}
                                    onChangeUpdateName={this.onChangeUpdateName}
                                    onChangeUpdateEmail={this.onChangeUpdateEmail}
                                />
                            </div>

                            <div>
                                <ButtonsContainer>

                                    {this.state.showButtonEdit === true
                                        ? (

                                            <UpdateButton onClick={this.UpdateUser}>Editar</UpdateButton>

                                        )
                                        : (
                                            ""
                                        )}


                                    <DeleteButton onClick={this.props.RemoveUser}>Excluir</DeleteButton>

                                </ButtonsContainer>

                            </div>
                        </div>
                    )
                    : (
                        <div>
                            <h3>Usuário excluido com sucesso!</h3>
                        </div>
                    )
                }
            </ContainerUpdate>
        )
    }
}