import React from "react";
import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #2D4051;
  padding: 20px;
  max-width: 300px;

  div {
    margin: 10px;
    display: flex;
    align-items: center;

    h3 {
      font-weight: 500;
    }
  }

  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`

const Inputs = styled.input`
  margin: 10px;
  padding: 5px;


`

export default class Register extends React.Component {
     render() {
        return (
            <ContainerInputs>
                <div>
                    <h3>Nome:</h3>
                    <Inputs
                        type='text'
                        value={this.props.inputName}
                        onChange={this.props.onChangeName}
                        placeholder={"Insira seu nome"}
                    />
                </div>

                <div>
                    <h3>Email:</h3>
                    <Inputs
                        type="email"
                        value={this.props.inputEmail}
                        onChange={this.props.onChangeEmail}
                        placeholder={"Insira seu e-mail"}
                    />
                </div>

                <button onClick={this.props.Register}>Cadastrar</button>
            </ContainerInputs>
        )
    }
}