import React from "react";
import * as All from "./User.styles"
import avatar from "../../images/avatar.jpg"

export default class User extends React.Component{
    render() {
        return (
            <All.ContainerUser>
                <All.ImageUser src={avatar} alt="user photo"/>

                <All.UserInfo>
                    <p>Profile</p>
                    <p>Settings</p>

                </All.UserInfo>
            </All.ContainerUser>
        )
    }
}