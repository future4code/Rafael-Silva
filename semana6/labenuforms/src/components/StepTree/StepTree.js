import React from "react";
import * as All from "./StepTree.styles"

export default class StepTree extends React.Component {
    state = {
        valueInputCourse: "",
        valueInputSchool: "",

    }

    render() {
        return (
            <All.Container>
                <All.Header>
                    <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO:</h2>
                </All.Header>

                <All.MainContent>
                    <div>
                        <p>5. Por que você não terminou um curso de graduação?</p>
                        <input type="text"
                               value={this.state.valueInputCourse}
                               onChange={(event) => {
                                   this.setState({valueInputCourse: event.target.value})
                               }}
                        />
                    </div>

                    <div>
                        <p>6. Você fez algum curso complementar?</p>
                        <select name="" id=""
                                value={this.state.valueSelection}
                                onChange={(event) =>{
                                    this.setState({valueSelection: event.target.value})
                                }}>
                            <option>Nenhum</option>
                            <option>Curso técnico</option>
                            <option>Curso de Inglês</option>
                        </select>
                    </div>


                </All.MainContent>
            </All.Container>
        )
    }
}