import styled from "styled-components";

export const ContainerTracks = styled.div`
  border: 2px solid #B82601;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;

  span {
    border-left: 4px solid #907163;
  }
`

export const Tracks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #B82601;
  
`

export const NewMusic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #B82601;

  button{
    margin-top: 20px;
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #B82601;
    }
  }

  h3 {
    color: #B82601;
  }

  div {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #B82601;
    padding: 10px;
    width: 100%;

    p {
      color: #379683;
      margin-right: 20px;
    }
    
    input{
      padding: 5px;
      border-radius: 5px;
    }
    
  }
`