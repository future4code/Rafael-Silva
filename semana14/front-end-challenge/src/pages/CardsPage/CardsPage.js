import { useEffect } from "react";
import styled from "styled-components";
import { getCards } from "../../services/cards";
import tarot from "../../constants/tarot.json";
import axios from "axios";
import { IMAGES_URL } from "../../constants/urls";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  margin: 10%;
  display: flex;
  border: 1px solid #000;
`;

const Card = styled.div`
  width: 20%;
`;

const CardsPage = () => {
  const image = tarot.cards.map((card) => {
    return (
      <Card>
        <img src={IMAGES_URL + card.image} />
        <p>{card.name}</p>
      </Card>
    );
  });

  console.log(image);

  return (
    <MainContainer>
      <CardsContainer>
       {image}
      </CardsContainer>
    </MainContainer>
  );
};

export default CardsPage;
