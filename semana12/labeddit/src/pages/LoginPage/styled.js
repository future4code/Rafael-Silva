import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const LoginContainer = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
background-color: #FFF;

  box-shadow: 0 0 5px 5px #CCC;
  border-radius: 5%;

  //border: 1px solid #000;

`

export const ElementLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px solid #000;
  width: 100%;
  height: 100%;
  padding: 20px;

`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`

export const ImageSidebar = styled.img`
  width: 100%;
  height: 80%;
  padding-right: 50px;
`
