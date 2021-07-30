import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`

export const ImageUser = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 2px solid #E3E3E3;
  max-width: 30%;
  margin-bottom: 10px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 20px;

  p {
    margin-bottom: 10px;
    color: #EDF5E1;
    cursor: pointer;
    
    :hover {
      background: #B82601;
      padding: 5px;
      font-size: 25px;
    }
  }
`