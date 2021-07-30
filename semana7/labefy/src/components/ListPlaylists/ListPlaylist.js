import React from "react";
import * as All from "./ListPlaylist.styles"

//COMPONENTS
import ListPlaylistItem from "./ListPlaylistItem";
import HeaderPlaylist from "../PlaylistTracks/HeaderPlaylist";
import Tracks from "../PlaylistTracks/Tracks";

//REQUESTS
import axios from "axios";
import {headers} from "../../App";


export default class ListPlaylist extends React.Component {
    state = {
        buttonPlaylistConfig: false,
        musicQuatity: 0,
        tracks: [],
        playlistName: ""
    }

    getPlaylistTracks = async (playlistId, playlistName) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        try {
            const response = await axios.get(url, headers)

            this.setState({
                buttonPlaylistConfig: !this.state.buttonPlaylistConfig,
                musicQuatity: response.data.result.quantity,
                tracks: response.data.result.tracks,
                playlistName: playlistName
            })
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    render() {

        return (
            <All.ContainerList>


                {this.state.buttonPlaylistConfig === false
                    ?
                    <All.List>

                        <All.ContainerHeaderList>
                            <h2>Playlists:</h2>
                        </All.ContainerHeaderList>

                        {this.props.PlaylistName.map((playlist) => {
                            return (
                                <ListPlaylistItem
                                    key={playlist.id}
                                    PlaylistName={playlist.name}
                                    PlaylistConfig={() => this.getPlaylistTracks(playlist.id, playlist.name)}
                                    RemovePlaylist={() => this.props.RemovePlaylist(playlist.name)}
                                />
                            )
                        })}
                    </All.List>

                    : (
                        <div>
                            <HeaderPlaylist
                                PlaylistName={this.state.playlistName}
                                QuantityTracks={this.state.musicQuatity}
                            />

                            <All.ButtonContainer>
                                <button
                                    onClick={() => this.setState({buttonPlaylistConfig: !this.state.buttonPlaylistConfig})}>
                                    Voltar Para Playlists
                                </button>
                            </All.ButtonContainer>

                            <Tracks

                            />
                        </div>
                    )
                }

            </All.ContainerList>
        )
    }

}