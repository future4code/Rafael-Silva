import styled from "styled-components";

export const Background = styled.div`
  background-image: ${(props) => `url(${props.Background})`};
  background-repeat: repeat-y;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  //border: 1px solid #FF5F6D;

  h2 {
    font-size: 64px;
    color: #FFF;
    padding: 20px;

    :hover {
      cursor: pointer;
      background-color: rgba(89, 37, 58, 0.4);
      border-radius: 50%;
    }
  }
`

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 10px;

  //border: 1px solid #FF5F6D;

`

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 10px;
  //border: 1px solid #FF5F6D;

  h3 {
    font-size: 36px;
    color: #FFF;
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;

  /* Put a card in the next row when previous cards take all width */
  flex-wrap: wrap;
  overflow-x: hidden;

  //border: 1px solid #FF5F6D;

`

export const CardsItem = styled.div`
  /* There will be 4 cards per row */
  flex-basis: 30%;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 40px;
  margin-right: 40px;

  //border: 1px solid #FF5F6D;

`