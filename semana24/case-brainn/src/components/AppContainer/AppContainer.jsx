import {
    Left,
    Right,
    Container,
    Wrapper,
    Curve,
    Background,
} from './AppContainer.styles';

const AppContainer = (props) => {
    const { left, right } = props;

    return (
        <Wrapper>
            <Container>
                <Background>
                    <Left>{left}</Left>
                    <Curve />
                </Background>
                <Right>{right}</Right>
            </Container>
        </Wrapper>
    );
};

export default AppContainer;
