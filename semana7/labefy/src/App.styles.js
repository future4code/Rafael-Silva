import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr 105px;
  //align-items: center;
  //flex-direction: column;
  height: 100vh;

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    border-top: 1px solid #B82601;
    background-color: #B82601;
  }

`

export const Siderbar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid red;
  padding: 20px;
  margin-right: 7px;
  //margin-bottom: 7px;
  background: #1D2025;
  box-shadow: 2px 4px 3px 3px rgba(184, 38, 1, 0.4);
  color: #379683;
  height: 100%;

  direction: ltr;

`
export const Scroll = styled.div`
  direction: rtl;
  overflow-y: auto;
  overflow-x: hidden;
`


export const ContainerMain = styled.main`
  flex: 1;
  /* Make it scrollable */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 2px 4px 3px 3px rgba(184, 38, 1, 0.4);
  background: #1D2025;


  width: 100%;
  height: 100%;
  //padding: 20px;
`

export const ContainerFooter = styled.footer`
  grid-column: 1 /-1;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 5px 4px 3px 7px rgba(184, 38, 1, 0.4);
  background: #1D2025;
  

  display: flex;
  align-items: center;
  //flex-direction: column;
  //margin-top: 5px;
  padding: 20px;
`


