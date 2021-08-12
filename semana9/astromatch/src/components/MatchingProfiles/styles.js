import styled from "styled-components";

export const NoMatches = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px;
  padding: 10px;

  h1{
    color: #762d93;
    font-size: 40px;
    font-weight: 600;
  }  
`

export const BoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px;
  padding: 10px;

  //border: 1px solid #1D2025;

  :hover{
    background-color: #EEE;
    border-radius: 5px;
    cursor: pointer;
  }
  
  h3{
    margin-left: 10px;
    font-weight: 500;
    color: #48a498;
  }
`

export const Photo = styled.div`
  background-image: ${(props) => `url(${props.Image})` || "#1D2025"};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`