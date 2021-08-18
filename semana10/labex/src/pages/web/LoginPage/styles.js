import styled from "styled-components";


export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: rgb(89, 37, 58);
  background: linear-gradient(0deg, rgba(89, 37, 58, 1) 0%, rgba(120, 36, 76, 1) 52%, rgba(137, 80, 97, 1) 100%);
  width: 100vw;
  height: 100vh;

  //border: 1px solid #FF5F6D;
`

export const RowCell = styled.div`
  flex: 0 0 25%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  //border: 1px solid #FF5F6D;
`

export const Title = styled.h1`
  color: #FFF;
  font-weight: 700;
  font-size: 64px;
  margin-bottom: 10px;
`

export const SubTitle = styled.h2`
  color: #FFF;
  font-weight: 500;
  font-size: 36px;
  margin: 40px auto;
`
