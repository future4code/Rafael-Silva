import React from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from "../components/Header/Header"
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/signup">
                    <SignUpPage/>
                </Route>

                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/post/:id">
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router