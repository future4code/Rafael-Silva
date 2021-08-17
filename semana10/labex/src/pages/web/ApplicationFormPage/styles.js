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