import styled from "styled-components"


export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  
  margin-top: 20px;
  font-family: "Verdana", sans-serif;

`

export const ContainerPosts = styled.div`
  overflow: auto;

`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 60px;
  
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