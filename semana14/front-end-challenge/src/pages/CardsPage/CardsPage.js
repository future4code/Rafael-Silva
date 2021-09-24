import { useState } from "react";
import tarot from "../../constants/tarot.json";
import { IMAGES_URL, IMAGE_BACK_CARDS } from "../../constants/urls";
import { useHistory } from "react-router";

//COMPONENTS
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { goToSelectCard } from "../../routes/coordinator";

//Styles
import { Cards, CardsItem, MainContainer } from "./styled";

const CardsPage = () => {
    const history = useHistory();
    const [imageBack, setImageBack] = useState(false);

    const renderImages = () => {
        let image = tarot.cards.map((card) => {
            return (
                <CardsItem key={card.name}>
                    <Card Image={IMAGES_URL + card.image} />
                    <h3>{card.name}</h3>
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
                    <Card Image={IMAGE_BACK_CARDS} Content={false} />
                </CardsItem>
            );
        });

        return imagesBack;
    };

    return (
        <MainContainer>
            <Header Embarrass={embarrassCards} BackButton={false} />
            <Cards>{imageBack ? renderImagesBack() : renderImages()}</Cards>
        </MainContainer>
    );
};

export default CardsPage;
