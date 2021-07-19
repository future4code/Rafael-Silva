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

    select {
      width: 100%;
      padding: 5px;
      margin-top: 20px;
    }
  }

`

export default class OptionsQuestions extends React.Component {
    state = {
        valueSelection: ""
    }
    render() {
        let options = this.props.options

        return (
            <MainContent>
                <div>
                    <p>{this.props.question}</p>
                    <select name="" id=""
                            value={this.state.valueSelection}
                            onChange={(event) => {
                                this.setState({valueSelection: event.target.value})
                            }}>
                        {options.map(optionValue => (
                            <option value={optionValue}>{optionValue}</option>
                        ))}
                    </select>
                </div>
            </MainContent>
        )
    }
}