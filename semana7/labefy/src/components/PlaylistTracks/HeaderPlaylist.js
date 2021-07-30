import React from "react";
import * as All from "./HeaderPlaylist.styles"
import playlistPhoto from "../../images/playlist-photo.jpg"

export default class HeaderPlaylist extends React.Component {
    render() {
        return (
            <All.ContainerPlaylist>
                <All.CircleContainer>
                    <All.ImagePlaylist src={playlistPhoto} alt="playlist photo"/>
                </All.CircleContainer>

                <All.NamePlaylist>
                    <p>Playlist</p>
                    <h1>{this.props.PlaylistName}</h1>

                    <div>
                        <p>User - {this.props.QuantityTracks} músicas </p>
                    </div>

                </All.NamePlaylist>

            </All.ContainerPlaylist>
        )
    }
}