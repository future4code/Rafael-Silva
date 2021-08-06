import styled from "styled-components";

export const ContainerList = styled.div`
  height: 100%;
  //border: 2px solid #B82601;
  //margin: 10px;
  //padding: 10px;
 
`

export const ContainerHeaderList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: #B82601;

`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
  padding: 5px;
  //border: 2px solid #B82601;


`

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 10px;
  border-bottom: 1px solid #EDF5E1;
  width: 100%;
  color: #379683;
  
  button {
    cursor: pointer;
    margin: auto 10px;
  }
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
      color: #B82601;
    }
  }
`

