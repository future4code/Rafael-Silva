import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #2D4051;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  div{
    margin: 10px auto;
    text-align: center;
    
    p {
      font-weight: 500;
    }
    
    input {
      width: 100%;
      padding: 5px;
      margin: 5px auto;
    }
    
    select{
      width: 100%;
      padding: 5px;
      margin-top: 20px;
    }
  }
  
`