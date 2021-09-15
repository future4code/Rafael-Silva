import React from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import CardSelected from '../pages/CardSelected/CardSelected';
import CardsPage from '../pages/CardsPage/CardsPage';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <CardsPage />
                </Route>

                <Route exact path="/:index">
                   <CardSelected/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Router