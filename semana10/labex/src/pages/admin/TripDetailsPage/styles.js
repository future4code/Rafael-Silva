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
  justify-content: flex-start;
  width: 100%;
  padding: 30px;

  /* Put a card in the next row when previous cards take all width */
  flex-wrap: wrap;
  overflow-x: hidden;

  //border: 1px solid #FF5F6D;

`

export const CardsItem = styled.div`
  /* There will be 4 cards per row */
  flex-basis: 40%;

  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 40px;
  margin-right: 40px;

  //border: 1px solid #FF5F6D;

`
