import React from "react";
import styled from "styled-components";
import close from "../../img/close_black_24dp.svg"

const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 10px;
  border-bottom: 1px solid #2D4051;
  width: 100%;

  img {
    cursor: pointer;
  }
`

export default class ListUsersItem extends React.Component {
    render() {
        return (
            <ContainerItem>
                <li>{this.props.UserName}</li>

                <div>
                    <img src={close} alt={"Remover Usuário"}
                         onClick={this.props.RemoveUser}
                    />
                </div>
            </ContainerItem>
        )
    }
}