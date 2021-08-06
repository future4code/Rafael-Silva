import React from "react";
import * as All from "./ListPlaylist.styles"

//COMPONENTS
import ListPlaylistItem from "./ListPlaylistItem";
import HeaderPlaylist from "../PlaylistTracks/HeaderPlaylist";
import Tracks from "../PlaylistTracks/Tracks";

//REQUESTS
import axios from "axios";
import {headers} from "../../App";

//TRACKS
import Track1 from "../../tracks/4.mp3";
import Track2 from "../../tracks/1.mp3";
import Track3 from "../../tracks/14.mp3";
import Track4 from "../../tracks/20.mp3";
import Track5 from "../../tracks/36.mp3";
import Track6 from "../../tracks/45.mp3";
import Track7 from "../../tracks/55.mp3";
import Track8 from "../../tracks/64.mp3";
import Track9 from "../../tracks/73.mp3";
import Track10 from "../../tracks/81.mp3";


export default class ListPlaylist extends React.Component {
    state = {
        buttonPlaylistConfig: false,
        inputTrackName: "",
        inputTrackArtist: "",
        inputTrack: "",
        musicQuatity: 0,
        tracks: [],
        playlistName: "",
        playlistId: 0,
    }

    getPlaylistTracks = async (playlistId, playlistName) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        try {
            const response = await axios.get(url, headers)

            this.setState({
                buttonPlaylistConfig: !this.state.buttonPlaylistConfig,
                musicQuatity: response.data.result.quantity,
                tracks: response.data.result.tracks,
                playlistName: playlistName,
                playlistId: playlistId
            })
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    addTrackToPlaylist = async (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        const body = {
            name: this.state.inputTrackName,
            artist: this.state.inputTrackArtist,
            url: this.state.inputTrack
        }

        try {
            await axios.post(url, body, headers)

            alert(`Música Adicionada em ${this.state.playlistName} com sucesso!`)

            this.setState({
                inputTrackName: "",
                inputTrackArtist: "",
                inputTrack: ""
            })
            await this.getPlaylistTracks()
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }

    }

    removeTrackFromPlaylist = async (trackId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks/${trackId}`

        try {
            await axios.delete(url, headers)

            alert(`Música removida com sucesso!`)

            await this.getPlaylistTracks()
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    onChangeInputTrack = (e) => {
        let numbers = [Track1, Track2, Track3, Track4, Track5, Track6, Track7, Track8, Track9, Track10]

        const aleatoryTrack = Math.floor(Math.random() * numbers.length)

        const track = numbers[aleatoryTrack]

        this.setState({
            inputTrack: track
        })
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
                                    RemovePlaylist={() => this.props.RemovePlaylist(playlist.id, playlist.name)}
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
                                Tracks={this.state.tracks}
                                InputTrackName={this.state.inputTrackName}
                                onChangeInputTrackName={(e) => this.setState({inputTrackName: e.target.value})}
                                InputTrackArtist={this.state.inputTrackArtist}
                                onChangeInputTrackArtist={(e) => this.setState({inputTrackArtist: e.target.value})}
                                InputTrack={this.state.inputTrack}
                                onChangeInputTrack={this.onChangeInputTrack}
                                NewTrack={() => this.addTrackToPlaylist(this.state.playlistId)}
                                PlayTrack={this.props.PlayTrack}
                                RemoveTrack={this.removeTrackFromPlaylist}
                            />
                        </div>
                    )
                }

            </All.ContainerList>
        )
    }

}