import {Buttons, Card, CardContent, CardCover, PhotoProfile} from "./styles";

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

        if (isMatch){
            getProfileToChoose(getNewProfile)
        }

        getProfileToChoose(getNewProfile)
    }


    const getNewProfile = (data) => {
        setProfile(data)
    }

    useEffect(() => {
        getProfileToChoose(getNewProfile)
    }, [])

    return (
        <>
            {profile &&
            <>
                <Card>
                    <CardCover Background={profile.photo}>
                        <div>
                            {profile.photo &&
                            <>
                                <h4>{profile.name + ", "}<span>{profile.age}</span></h4>
                                <p>{profile.bio}</p>
                            </>
                            }
                        </div>
                    </CardCover>
                </Card>

                <CardContent>
                    <Buttons>
                        <button onClick={() => matchPerson(!userChoose)} color={"X"}>X</button>
                        <button onClick={() => matchPerson(!userChoose)} color={"V"}>V</button>

                    </Buttons>
                </CardContent>
            </>
            }
        </>
    )
}

export default NewProfile