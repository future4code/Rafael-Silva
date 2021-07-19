import React from "react";
import * as All from "./App.styles"

import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import StepTree from "./components/StepTree/StepTree";
import Finals from "./components/Finals/Finals.js"


class App extends React.Component {
    state = {
        step: 1
    }

    renderSteps = () => {
        switch (this.state.step) {
            case 1:
                return <StepOne/>
            case 2:
                return <StepTwo/>
            case 3:
                return <StepTree/>
            case 4:
                return <Finals/>
        }
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    render() {

        return (
            <>
                <All.Container>
                    <All.MainHeader>
                        {this.renderSteps()}
                    </All.MainHeader>
                </All.Container>

                <All.Container>
                    <All.MainContent>
                        {
                            this.state.step !== 4
                                ? <button onClick={this.nextStep}>Próxima Etapa</button>
                                : ""
                        }
                    </All.MainContent>
                </All.Container>

                <All.Container>
                    <All.MainFooter>
                        <h2>Todos os Direitos Reservados &reg;</h2>
                    </All.MainFooter>
                </All.Container>
            </>
        );
    }
}

export default App;
