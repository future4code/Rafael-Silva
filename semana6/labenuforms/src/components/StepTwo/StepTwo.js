import React from "react";
import * as All from "./StepTwo.styles"

import CloseQuestions from "../CloseQuestions/CloseQuestions";

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

                <CloseQuestions question={"5. Qual curso?"}/>
                <CloseQuestions question={"6. Qual a unidade de ensino?"}/>

            </All.Container>
        )
    }
}