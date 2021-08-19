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
  display: flex;
  justify-content: center;
  align-items: center;
  /* Make it scrollable */
  overflow: auto;
  padding: 20px;
`

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto;
`

export const ImageUser = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 2px solid #E3E3E3;
  max-width: 50%;
  height: auto;
  margin-bottom: 10px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;

  font-weight: 500;
  font-size: 20px;

  p {
    color: #EDF5E1;
    cursor: pointer;
    font-weight: 600;
    font-size: 30px;

  }
`

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  border-top: 1px solid #000;
  background-color: #000;

`

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  //border: 1px solid #FF5F6D;

  button {
    margin: 20px auto;
    width: 50%;
    background-color: #895061;
  }
`

export const ContainerList = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #895061;
`