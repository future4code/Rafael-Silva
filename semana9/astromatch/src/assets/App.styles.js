import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //border: 1px solid #1D2025;
  width: 25%;
  padding: 10px;

  background-color: #FFF;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;


  border-bottom: 1px solid #1D2025;
`

export const Logo = styled.img`
  width: 30%;
  margin: 0 auto;
  cursor: pointer;
`

export const Right = styled.img`
  width: 10%;
  cursor: pointer;
`


export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //border: 1px solid #1D2025;
  width: 100%;
  //margin: 10px;
  //padding: 20px;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //border: 1px solid #1D2025;


`

export const Buttons = styled.div`
  margin-top: 20px;

  button {
    margin: 30px;
    padding: 20px;
    border-radius: 5px;
    background-color: #48a498;

    :hover {
      cursor: pointer;
      color: #762d93;
    }
  }
`