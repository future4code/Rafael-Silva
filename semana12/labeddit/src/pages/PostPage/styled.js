import styled from "styled-components";
import {Box} from "@material-ui/core";


export const MainContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    border-top: 1px solid #CCC;
    background-color: #CCC;
  }
`

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-top: 10px;
  //border: 2px solid #000;

`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const PostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`