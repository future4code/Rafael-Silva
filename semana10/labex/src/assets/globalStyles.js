import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }
  
  button {
    padding: 15px;
    outline: none;
    border-radius: 12px;
    color: #FFF;
    background-color: #2D4159;
    font-size: 20px;

    :hover{
      background-color: #5a6879;
      cursor: pointer;
    }
  }

`
export default GlobalStyles