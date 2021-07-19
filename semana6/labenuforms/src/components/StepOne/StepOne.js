import React from "react";
import * as All from "./StepOne.styles"

export default class StepOne extends React.Component {
    state = {
        valueInputName: "",
        valueInputAge: "",
        valueInputEmail: "",
        valueSelection: ""
    }

    render() {
        return (
            <All.Container>
                <All.Header>
                    <h2>ETAPA 1 - DADOS GERAIS:</h2>
                </All.Header>

                <All.MainContent>
                    <div>
                        <p>1. Qual o seu nome?</p>
                        <input type="text"
                               value={this.state.valueInputName}
                               onChange={(event) => {
                                   this.setState({valueInputName: event.target.value})
                               }}
                        />
                    </div>

                    <div>
                        <p>2. Qual a sua idade?</p>
                        <input type="text"
                               value={this.state.valueInputAge}
                               onChange={(event) => {
                                   this.setState({valueInputAge: event.target.value})
                               }}
                        />
                    </div>

                    <div>
                        <p>3. Qual o seu e-mail?</p>
                        <input type="text"
                               value={this.state.valueInputEmail}
                               onChange={(event) => {
                                   this.setState({valueInputEmail: event.target.value})
                               }}
                        />
                    </div>

                    <div>
                        <p>4. Qual a sua escolaridade?</p>
                        <select name="" id=""
                            value={this.state.valueSelection}
                                onChange={(event) =>{
                                    this.setState({valueSelection: event.target.value})
                                }}>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                        </select>
                    </div>
                </All.MainContent>
            </All.Container>
        )
    }
}