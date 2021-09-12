import { createTheme } from '@material-ui/core/styles'
import {primaryColor, neutralColor, background} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    text: {
        primary: neutralColor
    },
    background: {
      default: background
    }
  }
})

export default theme 