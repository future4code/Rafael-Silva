import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid #1D2025;
  width: 100%;
  flex-direction: column;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #1D2025;
  width: 60%;
  margin: 20px;
  padding: 20px;

  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`

export const Titles = styled.div`
  display: flex;
  //justify-content: flex-start;
  //align-items: center;
  flex-direction: column;
  //border: 1px solid #1D2025;
  padding: 20px;
  margin: 10px auto;
  text-align: left;

  h2 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 7px;

  }
`


export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //border: 1px solid #1D2025;
  width: 50%;
  margin: 10px;
  padding: 20px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #1D2025;
  padding: 20px;
`

export const CardCover = styled.div`
  height: 150px;
  width: 100%;

  img {
    width: 200px;
  }
`

export const CardContent = styled.div`
  margin-top: 50px;
  flex: 1;
  

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
      margin-left: 5px;
    }
  }
`

export const Buttons = styled.div`
  margin: 20px;
  
  button {
    margin-right: 10px;
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`