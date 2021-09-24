import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f8fc;
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
    margin-bottom: 60px;
    margin-right: 40px;
    max-height: 50%;

    h3 {
        text-align: center;
        font-weight: 500;
        margin-top: 10px;
    }
`;
