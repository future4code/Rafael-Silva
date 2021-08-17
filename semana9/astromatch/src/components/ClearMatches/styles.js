import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //border: 1px solid #1D2025;


`

export const Buttons = styled.div`
  margin-top: 20px;

  button {
    margin: 30px;
    padding: 20px;
    border-radius: 5px;
    background-color: #48a498;

    :hover {
      cursor: pointer;
      color: #762d93;
    }
  }
`