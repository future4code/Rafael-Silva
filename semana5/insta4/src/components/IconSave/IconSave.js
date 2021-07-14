import React from "react";
import styled from "styled-components";


const IconContainer = styled.div`
	display: flex;
`

const IconImage = styled.img`
	margin-right: 5px;
	cursor: pointer;
`

export function IconSave (props) {
    return (
        <IconContainer>
            <IconImage alt={"icone"} src={props.icone} onClick={props.onClickSave}/>
        </IconContainer>
    )
}