// styles
import { Wrapper, Options } from './App.styles';

// components
import AppContainer from '../AppContainer/AppContainer';
import { useState } from 'react';

const App = () => {
    const [title, setTitle] = useState('');
    
    const selectedOption = (e) => {
        const option = e.target.value;

        switch (option) {
            case 'mega-sena':
                setTitle('Mega-Sena');
                break;
            case 'quina':
                setTitle('Quina');
                break;
            case 'lotofacil':
                setTitle('Lotofácil');
                break;
            case 'lotomania':
                setTitle('Lotomania');
                break;
            case 'timemania':
                setTitle('Timemania');
                break;
            case 'dia-de-sorte':
                setTitle('Dia de Sorte');
                break;
            default:
                setTitle('Mega-Sena');
                break;
        }
    };

    return (
        <Wrapper>
            <AppContainer
                left={
                    <>
                        <Options
                            value={selectedOption}
                            onChange={selectedOption}
                        >
                            <option value="mega-sena">Mega-sena</option>
                            <option value="quina">Quina</option>
                            <option value="lotofácil">lotofácil</option>
                            <option value="lotomania">Lotomania</option>
                            <option value="timemania">Timemania</option>
                            <option value="dia-de-sorte">Dia de sorte</option>
                        </Options>

                        <h1>{title.toUpperCase()}</h1>
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
