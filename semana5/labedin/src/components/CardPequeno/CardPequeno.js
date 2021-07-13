import React from "react"
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 80px;
  
  img {
    width: 5%;
    margin-right: 10px;
  }
`

export default function CardPequeno(props) {
    return (
        <div>
            <Container>
                <img src={props.imagem} alt={props.alt}/>
                <p><strong>{props.nome}</strong>: {props.descricao}</p>
            </Container>
        </div>
    )
}