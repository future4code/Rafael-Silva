import styled from "styled-components";


export const Card = styled.div`
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 430px;
  position: relative;
  border-radius: 5%;

`

export const CardCover = styled.div`
  box-shadow: 0 2px 10px 0 rgba(117, 117, 117, 0.77);

  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.Background})` || "#000"};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;

  border-radius: 5%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 40px 20px;

    //border: 1px solid #1D2025;


    h4 {
      color: #FFF;
      font-weight: 900;
      font-size: 30px;

      span {
        font-weight: 400;
      }
    }

    p {
      margin-top: 5px;
      color: #FFF;
      font-weight: 500;
      font-size: 25px;
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