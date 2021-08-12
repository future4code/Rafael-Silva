import {useEffect, useState} from "react";

//styles
import {
    Container
} from "./assets/App.styles";

//Requests


//Components
import ClearMatches from "./components/ClearMatches/ClearMatches";
import Profiles from "./pages/Profiles/Profiles";
import Matches from "./pages/Matches/Matches";


function App() {
    const [currentPage, setCurrentPage] = useState("profiles")

    const selectPage = () => {
        switch (currentPage) {
            case "profiles":
                return <Profiles
                    CurrentPage={currentPage}
                    SelectPage={setCurrentPage}
                />
            case "matches":
                return <Matches
                    CurrentPage={currentPage}
                    SelectPage={setCurrentPage}
                />

            default:
                return <h1>Page not found</h1>
        }
    }

    return (
        <Container CurrentPage={currentPage}>

            {selectPage()}

        </Container>
    );
}

export default App;
