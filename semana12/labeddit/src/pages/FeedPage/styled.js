import styled from "styled-components";
import {Box} from "@material-ui/core";


export const MainContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-top: 10px;
  //border: 2px solid #000;

`

export const CardContainer = styled(Box)`
  flex-wrap: wrap;
  flex-basis: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //border: 2px solid #000;

`

export const FeedFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const RegisterPost = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;

  //border: 2px solid #000;

`