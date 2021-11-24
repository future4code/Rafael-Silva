import {
    Left,
    Right,
    Container,
    Wrapper,
} from './AppContainer.styles';

const AppContainer = (props) => {
    const { left, right } = props;

    return (
        <Wrapper>
            <Container>
                <Left>{left}</Left>
                <Right>{right}</Right>
            </Container>
        </Wrapper>
    );
};

export default AppContainer;
