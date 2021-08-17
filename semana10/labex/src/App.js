//Styles

import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/web/HomePage/HomePage";
import ListTripsPage from "./pages/web/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "./pages/web/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./pages/web/LoginPage/LoginPage";
import AdminHomePage from "./pages/admin/AdminHomePage/AdminHomePage";
import CreateTripPage from "./pages/admin/CreateTripPage/CreateTripPage";
import TripDetailsPage from "./pages/admin/TripDetailsPage/TripDetailsPage";
import ErrorPage from "./pages/web/ErrorPage/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/trips/list">
                    <ListTripsPage/>
                </Route>

                <Route exact path="/trips/application">
                    <ApplicationFormPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage/>
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage/>
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default App;
