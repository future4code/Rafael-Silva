import { useParams } from 'react-router';
import tarot from "../../constants/tarot.json";
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import { IMAGES_URL } from '../../constants/urls';

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

    // border: 1px solid #FF5F6D;
`;

export const CardsItem = styled.div`
    /* There will be 4 cards per row */
    flex-basis: 30%;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 40px;
    margin-right: 40px;
    max-height: 50%;
`;

const CardSelected = () => {
    const params = useParams()
    const cardSelected = tarot.cards[params.index]


    // console.log(cardSelected)

    return (
        <MainContainer>
            <Cards>
                <Cards>
                    <CardsItem>
                        <Card Image={IMAGES_URL + cardSelected.image}/>
                    </CardsItem>
                </Cards>
            </Cards>
        </MainContainer>
    );
};

export default CardSelected;
