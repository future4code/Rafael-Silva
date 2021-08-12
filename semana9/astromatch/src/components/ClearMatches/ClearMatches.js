import {Buttons, FooterContainer} from "./styles.js";

//Requests
import {clearProfilesFromApi} from "../../services/request";

const ClearMatches = (props) => {

    const clearProfiles = () => {
        clearProfilesFromApi((data) => alert(data))
    }

    return (
        <>
            <FooterContainer>
                <Buttons>
                    <button onClick={clearProfiles}>Limpar Perfis</button>
                </Buttons>
            </FooterContainer>
        </>
    )
}

export default ClearMatches