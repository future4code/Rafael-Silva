import styled from "styled-components";

export const Background = styled.div`
  background-image: ${(props) => `url(${props.Background})`};
  background-repeat: repeat-y;
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
`

export const ContainerHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //border: 1px solid #FF5F6D;
  margin: 10%;
  padding: 60px;
`

export const Title = styled.h1`
  font-size: 72px;
  color: #FFF;
  margin-bottom: 20px;

`

export const SubTitle = styled.h2`
  font-size: 36px;
  color: #FFF;
  margin: 40px auto;

`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  //border: 1px solid #FF5F6D;

`

