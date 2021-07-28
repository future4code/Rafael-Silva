import React from "react";
import styled from "styled-components";
import {getAllUsers} from "../../App";
import {removeUser} from "../../App";

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

  a {
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

    render() {
        return (
            <ContainerUpdate>
                <div>
                    <UpdateUserConfig
                        UserName={this.props.UserConfig.name}
                    />
                </div>


                <ButtonContainer>
                    <a onClick={() => this.removeUser(this.props.UserConfig.id)}>Excluir</a>
                </ButtonContainer>

            </ContainerUpdate>
        )
    }
}