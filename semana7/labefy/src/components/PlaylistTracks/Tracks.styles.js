import styled from "styled-components";

export const ContainerTracks = styled.div`
  //border: 2px solid #B82601;
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
  //justify-content: center;
  align-items: center;
  padding: 10px;
  //border: 2px solid #B82601;
  width: 100%;

  h3 {
    color: #B82601;
  }
`

export const ListTracks = styled.div`
  //border: 2px solid #B82601;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  width: 100%;


  div {
    margin-left: 10px;

    h4 {
      font-size: 20px;
      font-weight: 700;
    }

    p {
      font-weight: 500;
    }
  }
`

export const NewMusic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  //border: 2px solid #B82601;
  width: 100%;

  button {
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
    //border: 2px solid #B82601;
    padding: 10px;
    width: 100%;

    p {
      color: #379683;
      margin-right: 20px;
    }

    input {
      padding: 5px;
      border-radius: 5px;
    }

  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //border: 2px solid #B82601;
  width: 100%;

  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #B82601;
    }
  }
`
