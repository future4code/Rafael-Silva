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
  border: 1px solid #2D4051;
  width: 100%;

  div {
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px auto;

  button {
    padding: 10px;
    border-radius: 5px;
    background-color: red;
    color: #000;

    :hover {
      cursor: pointer;
      color: #FFF;
    }
  }
`

export default class UpdateUser extends React.Component {
    state = {
        backToList: false
    }

    render() {
        return (
            <ContainerUpdate>
                {this.state.backToList === false
                    ? (<div>
                            <div>
                                <UpdateUserConfig
                                    UserName={this.props.UserConfig.name}
                                />
                            </div>


                            <ButtonContainer>
                                <button onClick={this.props.RemoveUser}>Excluir</button>
                            </ButtonContainer>
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