import React from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import CardsPage from '../pages/CardsPage/CardsPage';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <CardsPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router