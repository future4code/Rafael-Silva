import React from "react";
import * as All from "./Playlist.styles"

export default class Playlist extends React.Component {
    render() {
        return (
            <All.ContainerPlaylist>
                <h2>Crie Sua Playlist:</h2>

                <All.ContainerInputs>
                    <div>
                        <input type="text"
                               value={this.props.InputPlaylistName}
                               onChange={this.props.onChangePlaylistName}
                        />

                       <button onClick={this.props.CreatePlaylist}>Criar</button>
                    </div>
                </All.ContainerInputs>
            </All.ContainerPlaylist>
        )
    }
}