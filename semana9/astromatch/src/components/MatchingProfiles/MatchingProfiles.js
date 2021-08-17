import {BoxContainer, NoMatches, Photo} from "./styles";
import {useEffect, useState} from "react";
import {getMatches} from "../../services/request";

//Requests


const MatchingProfiles = (props) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches((data) => setMatches(data))
    }, [])

    return (
        <>
            {matches.length === 0
                ? (
                    <NoMatches>
                        <h1>Sem Matches ;(</h1>
                    </NoMatches>
                )
                : (
                    <>
                        {matches.map((profile) => {
                                return (
                                    <BoxContainer key={profile.id}>

                                        <Photo Image={profile.photo} alt="foto do perfil"/>

                                        <h3>{profile.name}</h3>
                                    </BoxContainer>
                                )
                            }
                        )}
                    </>
                )
            }
        </>
    )
}

export default MatchingProfiles