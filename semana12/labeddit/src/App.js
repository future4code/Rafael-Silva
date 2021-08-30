import React from "react"
import Router from "./routes/Router"
import theme from './constants/theme'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from "@material-ui/core";

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <Router/>
        </ThemeProvider>
    )
}

export default App
