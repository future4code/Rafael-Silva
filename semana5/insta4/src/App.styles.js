import styled from "styled-components"


export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 19px;
  grid-template-areas: 
    ". .";

  margin-top: 20px;
  font-family: "Verdana", sans-serif;

`
export const i1 = styled.div`
  justify-self: end;
  align-self: start;
`

export const i2 = styled.div`
  overflow: auto;
  justify-self: start;
  align-self: start;

`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 60px;
  justify-self: center;
  align-self: start;

  label {
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    padding: 4px;
    margin-bottom: 10px;
    outline: none;

  }

  button {
    padding: 5px 20px;
    margin-top: 4px;
    background-color: #CCC;
    color: #000;
  }

  button:hover {
    cursor: pointer;
    color: #b2290a;
  }
`