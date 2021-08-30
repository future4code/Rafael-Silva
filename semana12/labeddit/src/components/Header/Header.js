import React from 'react'
import {LogoImage, StyledBox} from "./styled";
import logo from "../../assets/logo.png"

const Header = () => {

    return (
        <StyledBox>
        <LogoImage src={logo}/>
        </StyledBox>
    )
}

export default Header
