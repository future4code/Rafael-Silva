import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
	
	p{
		margin-right: 5px;
	}
`
const IconImage = styled.img`
	margin-right: 5px;
	cursor: pointer;
`


export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
