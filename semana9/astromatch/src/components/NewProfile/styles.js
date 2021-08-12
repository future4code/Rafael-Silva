import styled from "styled-components";


export const Profile = styled.div`
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  align-items: center;
  //padding: 40px;
  height: 430px;
  width: 100%;
  position: relative;
  border-radius: 5%;

  //border: 3px solid #1D2025;

 
`

export const BackgroudBlur = styled.div`
  background-image: ${(props) =>  `url(${props.Background})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: blur(10px);
  height: 100%;
  width: 100%;
  position: absolute;
`


export const PhotoProfile = styled.img`
  width: 100%;
  height: 80%;
  display: block;
  z-index: 1;
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  position: absolute;
  z-index: 2;
  //border: 1px solid #1D2025;


  h4 {
    color: #FFF;
    font-weight: 900;
    font-size: 30px;

    span {
      font-weight: 400;
    }
  }

  p {
    margin: 5px auto;
    color: #FFF;
    font-weight: 500;
    font-size: 25px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
  //border: 1px solid #1D2025;

`

export const OptionButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  font-weight: 700;
  position: relative;
  border: 1px solid ${(props => props.color === "like" ? `#E08D79` : `#B3F2DD`)};
  color: ${(props => props.color === "like" ? `#E08D79` : `#B3F2DD`)};

  :hover {
    cursor: pointer;
    border: none;
    font-size: 50px;

    background-color: ${(props => props.color === "like" ? `#E08D79` : `#B3F2DD`)};
    color: ${(props => props.color === "like" ? `#B3F2DD` : `#E08D79`)};
  }
`