//Styles

import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Labex/HomePage/HomePage";
import ListTripsPage from "./pages/Labex/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "./pages/Labex/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./pages/Labex/LoginPage/LoginPage";
import AdminHomePage from "./pages/LabexAdmin/AdminHomePage/AdminHomePage";
import CreateTripPage from "./pages/LabexAdmin/CreateTripPage/CreateTripPage";
import TripDetailsPage from "./pages/LabexAdmin/TripDetailsPage/TripDetailsPage";

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
                    <p>error</p>
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default App;
