import React from "react";
import styled from "styled-components";
import axios from "axios";

//Components
import Register from "./components/Register/Register";
import ListUsers from "./components/ListUsers/ListUsers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CenterRegister = styled.div`
  margin-top: 200px;
`

const CenterListUsers = styled.div`
  margin: 20px auto;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      color: #D36833;
    }
  }
`

class App extends React.Component {
    state = {
        clickListUsers: false
    }

    componentDidMount() {
    }


    registerUser = () => {

    }

    render() {
        return (
            <Container>
                {this.state.clickListUsers === false
                    ? (
                        <CenterRegister>

                            <Register
                                Register={this.registerUser}
                            />

                            <ButtonContainer>
                                <button
                                    onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                    Para Lista de Usuários
                                </button>
                            </ButtonContainer>

                        </CenterRegister>

                    )
                    : (
                        <CenterListUsers>

                            <ButtonContainer>
                                <button
                                    onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                    Para Cadastro de Usuários
                                </button>
                            </ButtonContainer>


                            <ListUsers

                            />

                        </CenterListUsers>
                    )
                }
            </Container>
        );
    }
}

export default App;
