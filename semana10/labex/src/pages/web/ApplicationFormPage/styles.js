import styled from "styled-components";

export const Background = styled.div`
  background-image: ${(props) => `url(${props.Background})`};
  background-repeat: repeat-y;
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`


export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  //border: 1px solid #FF5F6D;

  h2 {
    font-size: 64px;
    color: #FFF;
    padding: 20px;

    :hover {
      cursor: pointer;
      background-color: rgba(89, 37, 58, 0.4);
      border-radius: 50%;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 3% auto;
  padding: 10px;

  //border: 1px solid #FF5F6D;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35%;
  margin: 20px auto;
  //border: 1px solid #FF5F6D;

  form {
    //border: 1px solid #FF5F6D;
    width: 100%;
    margin: 10px;
    
    select {
      width: 100%;
      padding: 10px;
      font-size: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
      font-size: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      margin-top: 20px;
    }
  }
`