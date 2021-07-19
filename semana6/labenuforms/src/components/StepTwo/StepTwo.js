import React from "react";
import * as All from "./StepTwo.styles"

export default class StepTwo extends React.Component {
    state = {
        valueInputCourse: "",
        valueInputSchool: "",

    }

    render() {
        return (
            <All.Container>
                <All.Header>
                    <h2>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR:</h2>
                </All.Header>

                <All.MainContent>
                    <div>
                        <p>5. Qual curso?</p>
                        <input type="text"
                               value={this.state.valueInputCourse}
                               onChange={(event) => {
                                   this.setState({valueInputCourse: event.target.value})
                               }}
                        />
                    </div>

                    <div>
                        <p>6. Qual a unidade de ensino?</p>
                        <input type="text"
                               value={this.state.valueInputSchool}
                               onChange={(event) => {
                                   this.setState({valueInputSchool: event.target.value})
                               }}
                        />
                    </div>


                </All.MainContent>
            </All.Container>
        )
    }
}