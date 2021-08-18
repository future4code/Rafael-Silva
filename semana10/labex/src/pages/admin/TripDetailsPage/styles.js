import styled from "styled-components";


export const BackButton = styled.div`
  width: 20%;
  background-color: #895061;
  text-align: center;

  Button {
    margin: 20px auto;
    width: 50%;
    background-color: #2D4159;
  }
`

export const ContainerDetails = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
  background-color: #895061;
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;


  /* Put a card in the next row when previous cards take all width */
  flex-wrap: wrap;
  overflow-x: hidden;

  border: 1px solid #FF5F6D;
`