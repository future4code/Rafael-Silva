import { useEffect, useState } from "react";
import styled from "styled-components";
import tarot from "../../constants/tarot.json";
import { IMAGES_URL, IMAGE_BACK_CARDS } from "../../constants/urls";

//COMPONENTS
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { goToSelectCard } from "../../routes/coordinator";
import { useHistory } from "react-router";

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px;

    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;
    overflow-x: hidden;

    //border: 1px solid #FF5F6D;
`;

export const CardsItem = styled.div`
    /* There will be 4 cards per row */
    flex-basis: 20%;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 40px;
    margin-right: 40px;
    max-height: 50%;
`;

const CardsPage = () => {
    const history = useHistory();
    const [imageBack, setImageBack] = useState(false);


    const renderImages = () => {
        let image = tarot.cards.map((card) => {
            return (
                <CardsItem key={card.name}>
                    <Card Image={IMAGES_URL + card.image} />
                </CardsItem>
            );
        });

        return image;
    };

    const embarrassCards = () => {
        setImageBack(true);
    };

    const renderImagesBack = () => {
        let imagesBack = tarot.cards.map((card) => {
            return (
                <CardsItem
                    key={card.name}
                    style={{ cursor: "pointer" }}
                    onClick={() => goToSelectCard(history, Math.floor(Math.random() * tarot.cards.length))}>
                    <Card Image={IMAGE_BACK_CARDS} />
                </CardsItem>
            );
        });

        return imagesBack;
    };

    useEffect(() => {
        if (imageBack) {
            renderImagesBack();
        } else {
            renderImages();
        }
    }, [imageBack]);

    return (
        <MainContainer>
            <Header Embarrass={embarrassCards} />
            <Cards>{imageBack ? renderImagesBack() : renderImages()}</Cards>
        </MainContainer>
    );
};

export default CardsPage;
