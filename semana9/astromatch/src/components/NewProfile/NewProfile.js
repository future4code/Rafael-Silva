import {Buttons, Card, CardContent, CardCover} from "./styles";

//Requests
import {choosePerson, getProfileToChoose} from "../../services/request";
import {useEffect, useState} from "react";


const NewProfile = (props) => {
    const [profile, setProfile] = useState({})
    const [userChoose, setUserChoose] = useState(false)
    const [isMatch, setIsMatch] = useState(false)
    // const [currentAnimation, setCurrentAnimation] = useState(null)

    const matchPerson = (userChoose, event) => {
        // let currentAnimation = (event === "deslike" ? )
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
    }, [])

    return (
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
                    <button onClick={() => matchPerson(false, "deslike")} color={"X"}>X</button>
                    <button onClick={() => matchPerson(true, "like")} color={"V"}>V</button>

                </Buttons>

            </CardContent>
        </>
    )
}

export default NewProfile