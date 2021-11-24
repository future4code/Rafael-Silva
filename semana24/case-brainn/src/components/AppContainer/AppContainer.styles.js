import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
`;

export const Left = styled.div`
    width: 100%;
    margin: 10px;
    border: 1px solid #000;
    border-right-radius: 50%;
`;

export const Right = styled.div`
    width: 100%;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 5px;
`;