import React from "react";
import * as All from "./StepOne.styles"

import OpenQuestions from "../OpenQuestions/OpenQuestions";
import OptionsQuestions from "../OpenQuestions/OptionsQuestions/OptionsQuestions";

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

                <OpenQuestions question={"1. Qual o seu nome?"}/>
                <OpenQuestions question={"2. Qual sua idade?"}/>
                <OpenQuestions question={"3. Qual seu email?"}/>

                <OptionsQuestions question={"4. Qual a sua escolaridade?"}
                                  options={[
                                      "Ensino médio incompleto",
                                      "Ensino médio completo",
                                      "Ensino superior incompleto",
                                      "Ensino superior completo"
                                  ]}
                />

            </All.Container>
        )
    }
}