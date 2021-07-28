import React from "react";
import styled from "styled-components";

const ContainerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #1D2025;
  margin: 10px auto;
  width: 100%;
`

const Details = styled.div`
  margin: 20px;
  border: 1px solid #1D2025;
  display: flex;
  align-items: center;
  padding: 10px;
  
  div{
    text-align: center;
  }
  
  input {
    padding: 5px;
    margin: 10px;
  }
`


export default class UpdateUserConfig extends React.Component {

    render() {
        return (
            <ContainerDetails>
                <Details>
                    <div>
                        <h4>Nome:</h4>
                    </div>

                    <input type="text"
                           value={this.props.UserName}
                        // onChange={}
                    />
                </Details>

                <Details>
                    <div>
                        <h4>Email:</h4>
                    </div>

                    <input type="email"
                           // value={this.props.email}
                    />
                </Details>
            </ContainerDetails>
        )
    }
}