import styled from "styled-components";


export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  button {
    padding: 5px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    
    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`

export const MainFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  position: absolute;
  bottom: 0;
  
  h2{
    color: #1D2025;
    font-weight: 500;
    font-size: 20px;
  }
`