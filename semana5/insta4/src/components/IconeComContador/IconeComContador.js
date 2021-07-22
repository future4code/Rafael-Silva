import React from 'react'
import * as all from "./IconeComContador.styles"

export function IconeComContador(props) {
    return (
        <all.IconContainer>
            <all.IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
            <p>{props.valorContador}</p>
        </all.IconContainer>
    )
}
