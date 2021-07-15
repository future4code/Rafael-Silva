import React from "react";
import * as all from "./IconSave.styles";

export function IconSave (props) {
    return (
        <all.IconContainer>
            <all.IconImage alt={"icone"} src={props.icone} onClick={props.onClickSave}/>
        </all.IconContainer>
    )
}