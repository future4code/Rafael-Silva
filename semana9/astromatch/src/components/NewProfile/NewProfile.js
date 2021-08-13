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
    const [isMatch, setIsMatch] = useState(false)

    const matchPerson = (userChoose) => {
        const body = {
            id: profile.id,
            choice: userChoose
        }

        choosePerson(body, (data) => data && alert("MATCH!!"))

        getProfileToChoose((data) => setProfile(data))
    }


    useEffect(() => {
        getProfileToChoose((data) => setProfile(data))
    }, [])

    return (
        <>
            {profile &&
            <>
                <Profile>
                    <BackgroudBlur Background={profile.photo}/>

                    <PhotoProfile src={profile.photo}/>

                    <InfoProfile>
                        <h4>{profile.name + ", "}<span>{profile.age}</span></h4>
                        <p>{profile.bio}</p>
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