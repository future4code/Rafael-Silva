import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
`;

export const Background = styled.div`
    width: 100%;
    display: flex;
    background-color: #6befa3;
`;

export const Curve = styled.div`
    width: 30%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    background-color: #fff;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 30px 70px;
`;

export const Right = styled.div`
    width: 100%;
    height: 100vh;
`;
