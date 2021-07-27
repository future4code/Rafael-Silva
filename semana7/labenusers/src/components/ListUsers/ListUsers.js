import React from "react";
import styled from "styled-components";

//Components
import ListUsersItem from "./ListUsersItem";

const ContainerUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #2D4051;
  padding: 20px;
`

const List = styled.div`
  border: 1px solid #2D4051;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  height: 100%;
  padding: 5px;
`

export default class ListUsers extends React.Component {
    render() {
        return (
            <ContainerUsers>
                <h2>Lista de Usuários</h2>

                <List>
                    <ListUsersItem
                        UserName={"Teste"}
                        RemoveUser={() => alert("Teste")}
                    />
                </List>
            </ContainerUsers>
        )
    }
}