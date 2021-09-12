import React from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";
import Header from "../components/Header/Header";


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
                    <Header
                        Search={true}
                    />
                    <FeedPage/>
                </Route>

                <Route exact path="/post/:id">
                    <Header
                        Search={false}
                    />
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