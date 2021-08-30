import styled from "styled-components"
import Toolbar from '@material-ui/core/Toolbar'
import {Box} from "@material-ui/core";


export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 200px;
  
  :hover{
    cursor: pointer;
  }
`

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

