//styles
import {
    Card,
    CardContainer,
    CardContent,
    CardCover,
    CardHeader,
    Container,
    Logo,
    MainContainer,
    Right
} from "./assets/App.styles";
import logo from "./assets/images/logo.png"
import left from "./assets/images/left-arrow.png"
import right from "./assets/images/right-arrow.png"

function App() {
    return (
        <Container>
            <CardContainer>
                <CardHeader>

                    <Logo src={logo} alt="logo astromatch"/>


                    <Right src={right} alt=""/>

                </CardHeader>


                <MainContainer>
                    <Card>
                        <CardCover>
                            <p>teste</p>
                            <p>teste</p>

                        </CardCover>

                    </Card>

                    <CardContent>
                        <p>teste</p>

                    </CardContent>
                </MainContainer>

            </CardContainer>
        </Container>
    );
}

export default App;
