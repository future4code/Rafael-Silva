// styles
import { Wrapper } from './App.styles';

// components
import AppContainer from '../AppContainer/AppContainer';

const App = () => {
    return (
        <Wrapper>
                <AppContainer
                    left={
                        <>
                            <h1>Teste 2</h1>
                        </>
                    }
                    right={
                        <>
                            <h1>Teste 3</h1>
                        </>
                    }
                />
        </Wrapper>
    );
};

export default App;
