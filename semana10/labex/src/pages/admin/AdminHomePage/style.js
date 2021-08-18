import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: rgb(89, 37, 58);
  background: linear-gradient(0deg, rgba(89, 37, 58, 1) 0%, rgba(120, 36, 76, 1) 52%, rgba(137, 80, 97, 1) 100%);
  width: 100vw;
  height: 100vh;
`

export const Sidebar = styled.div`
  width: 25%;
  background-color: #2D4159;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  /* Take the remaining width */
  flex: 1;

  /* Make it scrollable */
  overflow: auto;
  padding: 20px;

`

export const User = styled.div`
  
`