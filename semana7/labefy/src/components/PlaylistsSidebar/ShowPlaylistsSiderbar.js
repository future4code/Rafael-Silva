import React from "react";
import * as All from "./Playlist.styles"

export default class ShowPlaylistsSiderbar extends React.Component {
    render() {
        return (
            <All.ContainerShowPlaylists>
                <h2>Novas Playlists:</h2>

                <All.ListPlaylist>
                    {this.props.PlaylistName.map((playlist) => {
                        return (
                            <li key={playlist.id}>
                                {playlist.name}
                            </li>
                        )
                    })}
                </All.ListPlaylist>

            </All.ContainerShowPlaylists>
        )
    }
}