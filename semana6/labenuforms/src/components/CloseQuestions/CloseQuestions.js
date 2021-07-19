import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin: 10px auto;
    text-align: center;

    p {
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 5px;
      margin: 5px auto;
    }
  }

`

export default class CloseQuestions extends React.Component {
    state = {
        valueInput: ""
    }

    render() {
        return (
            <MainContent>
                <div>
                    <p>{this.props.question}</p>
                    <input type="text"
                           value={this.state.valueInput}
                           onChange={(event) => {
                               this.setState({valueInput: event.target.value})
                           }}
                    />
                </div>

            </MainContent>
        )
    }
}