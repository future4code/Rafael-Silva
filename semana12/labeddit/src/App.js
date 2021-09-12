import React from "react"
import Router from "./routes/Router"
import theme from './constants/theme'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from "@material-ui/core";
import GlobalStateContext from "./global/GlobalStateContext";

const App = () => {

    return (
        <ThemeProvider theme={theme}>
           <GlobalStateContext>
                <CssBaseline/>
                <Router/>
             </GlobalStateContext>
        </ThemeProvider>
    )
}

export default App
