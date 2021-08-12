import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #1D2025;
  padding: 20px;
  width: 50%;
`

export const CardCover = styled.div`
  height: 150px;
  width: 100%;
  text-align: center;

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

    h3 {
      margin: auto 0;
    }

    p {
      margin-left: 5px;
    }
  }
`