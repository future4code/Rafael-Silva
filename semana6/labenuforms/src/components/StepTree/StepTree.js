import React from "react";
import * as All from "./StepTree.styles"

import CloseQuestions from "../CloseQuestions/CloseQuestions";
import OptionsQuestions from "../OpenQuestions/OptionsQuestions/OptionsQuestions";

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

                <CloseQuestions question={"5. Por que você não terminou um curso de graduação?"}/>

                <OptionsQuestions question={"6. Você fez algum curso complementar?"}
                                  options={[
                                      "Nenhum",
                                      "Curso técnico",
                                      "Curso de Inglês",
                                  ]}
                />
            </All.Container>
        )
    }
}