import HeaderCard from "../../components/HeaderCard/HeaderCard";
import {CardContainer, MainContainer} from "../Profiles/styles";
import ClearMatches from "../../components/ClearMatches/ClearMatches";
import MatchingProfiles from "../../components/MatchingProfiles/MatchingProfiles";

const Matches = (props) => {
    return (
        <>
            <MainContainer>
                <HeaderCard
                    CurrenPage={props.CurrentPage}
                    SelectPage={props.SelectPage}
                />

                <CardContainer>
                    <MatchingProfiles/>
                </CardContainer>
            </MainContainer>

            <ClearMatches/>

        </>
    )
}

export default Matches