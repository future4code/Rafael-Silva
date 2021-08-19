import styled from "styled-components";

export const CardsItem = styled.div`
  /* There will be 4 cards per row */
  flex-basis: 40%;

  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 40px;
  margin-right: 40px;
  background-color: #E3E3E3;
  box-shadow: 12px 12px 2px 1px rgba(89, 37, 58, 0.4);
  //border: 1px solid #FF5F6D;
  max-width: 100%;
`

export const ButtonsChoice = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
  
  button{
    padding: 10px 15px;
  }
`
