import React from "react";
import styled from "styled-components";
import axios from "axios";

//Components
import Register from "./components/Register";
import ListUsers from "./components/ListUsers";

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


    registerUser = (e) => {

    }

    render() {
        return (
            <Container>
                {this.state.clickListUsers === false
                    ? (
                        <CenterRegister>
                            <div>
                                <Register
                                    Register={this.registerUser}
                                />

                                <ButtonContainer>
                                    <button
                                        onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                        Para Lista de Usuários
                                    </button>
                                </ButtonContainer>
                            </div>
                        </CenterRegister>

                    )
                    : (
                        <CenterListUsers>
                            <div>
                                <ButtonContainer>
                                    <button
                                        onClick={() => this.setState({clickListUsers: !this.state.clickListUsers})}>Ir
                                        Para Cadastro de Usuários
                                    </button>
                                </ButtonContainer>


                                <ListUsers

                                />
                            </div>
                        </CenterListUsers>
                    )
                }
            </Container>
        );
    }
}

export default App;
