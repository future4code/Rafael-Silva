import styled from "styled-components";


export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  width: 100%;

`

export const CardCover = styled.div`
  height: 400px;
  width: 100%;
  background-image: ${(props) => `url(${props.Background})` || "#000"};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 5%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 20px;
    //border: 1px solid #1D2025;


    h4 {
      color: #FF5F6D;

      span {
        font-weight: 400;
      }
    }

    p {
      margin-top: 5px;
      color: #FF5F6D;
      font-weight: 400;
    }

  }

`

export const CardContent = styled.div`
  margin-top: 50px;
  flex: 1;


  div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 5px;
    }
  }
`

export const Buttons = styled.div`


  button {
    margin: 30px;
    padding: 20px;
    border-radius: 50%;
      //background-color: ${(props => props.color === "V" ? `#48a498` : `#762d93`)};

    :hover {
      cursor: pointer;
      color: #762d93;
    }
  }
`