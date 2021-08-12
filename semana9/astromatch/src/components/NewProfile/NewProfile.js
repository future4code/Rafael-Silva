import {
    OptionButton,
    PhotoProfile,
    ButtonsContainer,
    BackgroudBlur,
    Profile, InfoProfile
} from "./styles";

//Requests
import {choosePerson, getProfileToChoose} from "../../services/request";
import {useEffect, useState} from "react";


const NewProfile = (props) => {
    const [profile, setProfile] = useState({})
    const [userChoose, setUserChoose] = useState(false)
    const [isMatch, setIsMatch] = useState(false)
    // const [currentAnimation, setCurrentAnimation] = useState(null)

    const matchPerson = (userChoose) => {
        const body = {
            id: profile.id,
            choice: userChoose
        }

        choosePerson(body, (data) => setIsMatch(data))

        getProfileToChoose(getNewProfile)
    }


    const getNewProfile = (data) => {
        setProfile(data)
    }

    useEffect(() => {
        getProfileToChoose(getNewProfile)
    }, [userChoose])

    return (
        <>
            {profile &&
            <>
                <Profile>
                    <BackgroudBlur Background={profile.photo}/>

                    <PhotoProfile src={profile.photo}/>

                    <InfoProfile>
                        {/*{profile.photo &&*/}
                        {/*<>*/}
                            <h4>{profile.name + ", "}<span>{profile.age}</span></h4>
                            <p>{profile.bio}</p>
                        {/*</>*/}
                        {/*}*/}
                    </InfoProfile>


                </Profile>


                <ButtonsContainer>
                    <OptionButton onClick={() => matchPerson(false)} color={"like"}>X</OptionButton>
                    <OptionButton onClick={() => matchPerson(true)} color={"deslike"}>🗸</OptionButton>

                </ButtonsContainer>

            </>
            }
        </>
    )
}

export default NewProfile