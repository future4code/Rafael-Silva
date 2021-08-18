import styled from "styled-components";

export const ThreeDimensionsCard = styled.div`
  position: relative;
  background-color: rgba(89, 37, 58, 0.4);
  height: 100%;
  
  
  ::before {
    //background: rgba(89, 37, 58, 0.4);
    background: #895061;
    content: '';

    /* Position */
    top: 1rem;
    left: 0px;
    position: absolute;
    transform: translate(-100%, 0) skewY(-45deg);
    transform-origin: left top;

    /* Size */
    height: 100%;
    width: 1rem;
  }

  ::after {
    background: #895061;
    content: '';

    /* Position */
    bottom: 0px;
    left: 0px;
    position: absolute;
    transform: translate(0, 100%) skewX(-45deg);
    transform-origin: left top;

    /* Size */
    height: 1rem;
    width: 100%;
  }
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  color: #FFF;
  overflow-x: hidden;
 
  
  span {
    font-size: 25px;
    font-weight: 600;
    margin-right: 15px;
    color: #0677A1;

  }

  p {
    margin: 10px 0;
    //padding: 10px 0;
    font-weight: 500;
  }
`

export const Container = styled.div`
  background-color: #E3E3E3;
  padding: 20px;
  margin: 20px auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 12px 12px 2px 1px rgba(89, 37, 58, 0.4);
  
  img{
    width: 4.5%;
    
    :hover{
      cursor: pointer;
      background-color: #CCCCCC;
      border-radius: 8px;
      padding: 2px;
    }
  }
`