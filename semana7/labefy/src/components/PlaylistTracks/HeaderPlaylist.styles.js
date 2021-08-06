import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  width: 100%;
  color: #B82601;
  height: 25%;
  position: sticky;
  top: 0;
  //border: 1px solid #B82601;
  display: flex;
  background: #379683;
  background: -webkit-linear-gradient(to right, #8EE4AF, #379683);
  background: linear-gradient(to right, #8EE4AF, #379683);
`

export const ImagePlaylist = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 2px solid #B82601;
  max-width: 100%;
  margin: 10px;
`

export const CircleContainer = styled.div`
  width: 300px;
  text-align: center;
  margin: auto 0;
`

export const NamePlaylist = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  
  margin: 30px;
  padding: 10px;
  //border: 2px solid #B82601;
  
  div{
    margin: 10px 0;
  }
`