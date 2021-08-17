//Styles
import {CardContainer, MainContainer} from "./styles";

//Components
import NewProfile from "../../components/NewProfile/NewProfile";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import ClearMatches from "../../components/ClearMatches/ClearMatches";


const Profiles = (props) => {
    return (
        <>
            <MainContainer>
                <HeaderCard
                    CurrentPage={props.CurrentPage}
                    SelectPage={props.SelectPage}
                />

                <CardContainer>
                    <NewProfile/>
                </CardContainer>
            </MainContainer>

            <ClearMatches/>
        </>
    )
}

export default Profiles