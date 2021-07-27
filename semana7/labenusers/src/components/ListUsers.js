import React from "react";
import styled from "styled-components";

const ContainerUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #2D4051;
  padding: 20px;
`

export default class ListUsers extends React.Component{
    render() {
        return(
            <ContainerUsers>
                <h2>Lista de usuarios</h2>
            </ContainerUsers>
        )
    }
}