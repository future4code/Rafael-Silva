import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  margin: 10px;
  //border: 4px solid #B82601;
  width: 60%;
  padding: 20px;
  

  h2 {
    font-size: 20px;
  }
`

export const ContainerInputs = styled.div`
  margin-top: 20px;


  div {
    display: flex;

    button {
      color: #EDF5E1;
      background: #379683;
      padding: 5px;
      margin-left: 10px;
      border-radius: 5px;
      font-size: 15px;
      
      :hover {
        cursor: pointer;
        color: #B82601;
      }
    }
  }
`

//SHOWPLAYLISTS

export const ContainerShowPlaylists = styled.div`
  display: flex;
  //align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px;
  //border: 1px solid #B82601;
  width: 100%;
  padding: 20px;
`


export const ListPlaylist = styled.div`
  //display: flex;
  ////align-items: center;
  //justify-content: flex-start;
  //flex-direction: column;
  margin-top: 10px;
  //border: 1px solid #B82601;
  width: 100%;
  padding: 20px;
  
  li {
    list-style: circle !important;
    margin-bottom: 10px;
  }
`