import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CenterRegister = styled.div`
  margin-top: 200px;
`

export const CenterListUsers = styled.div`
  margin: 20px auto;
  width: 50%;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`