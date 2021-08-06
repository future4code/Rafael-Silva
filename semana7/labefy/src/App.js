import React from 'react'
import * as All from "./App.styles"


//COMPONENTS
import User from "./components/User/User";
import Playlist from "./components/PlaylistsSidebar/Playlist";
import ShowPlaylistsSiderbar from "./components/PlaylistsSidebar/ShowPlaylistsSiderbar";
import ListPlaylist from "./components/ListPlaylists/ListPlaylist";
import PlayPauseTrack from "./components/PlayPauseTrack/PlayPauseTrack";

//REQUESTS
import axios from "axios";

//Tracks
import Track1 from "./tracks/4.mp3";
import Track2 from "./tracks/1.mp3";
import Track3 from "./tracks/14.mp3";
import Track4 from "./tracks/20.mp3";
import Track5 from "./tracks/36.mp3";
import Track6 from "./tracks/45.mp3";
import Track7 from "./tracks/55.mp3";
import Track8 from "./tracks/64.mp3";
import Track9 from "./tracks/73.mp3";
import Track10 from "./tracks/81.mp3";

export const headers = {
    headers: {
        Authorization: "rafael-nascimento-silva"
    }
}

class App extends React.Component {
    state = {
        inputPlaylistName: "",
        playlists: [],
        quantity: 0,
        playTrack: [],
        start: false
    }

    componentDidMount() {
        this.getAllPlaylist().then()
    }

    getAllPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        try {
            const response = await axios.get(url, headers)
            this.setState({
                playlists: response.data.result.list,
                quantity: response.data.result.quantity
            })

        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    createPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputPlaylistName
        }

        try {
            await axios.post(url, body, headers)

            alert("Playlists criada com sucesso!!")

            this.setState({
                inputPlaylistName: "",
            })

            await this.getAllPlaylist()
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }


    deletePlaylist = async (playlistId, playlistName) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

        try {
            await axios.delete(url,headers)

            alert(`A playlist ${playlistName} foi removida com sucesso!`)

            await this.getAllPlaylist()
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }


    PlayTrack = (track) => {

        this.setState({
            playTrack: [track],
            start: !this.state.start
        })
    }


    render() {
        return (
            <All.Container>
                <All.Scroll>
                    <All.Siderbar>
                        <User/>
                        <hr/>

                        <Playlist
                            InputPlaylistName={this.state.inputPlaylistName}
                            onChangePlaylistName={(e) => this.setState({inputPlaylistName: e.target.value})}
                            CreatePlaylist={this.createPlaylist}
                        />
                        <hr/>

                        <ShowPlaylistsSiderbar
                            PlaylistName={this.state.playlists}
                        />

                    </All.Siderbar>
                </All.Scroll>

                <All.ContainerMain>


                    <ListPlaylist
                        PlaylistName={this.state.playlists}
                        RemovePlaylist={this.deletePlaylist}
                        PlayTrack={this.PlayTrack}
                    />

                </All.ContainerMain>

                <All.ContainerFooter>
                    <PlayPauseTrack
                        PlayTrack={this.state.playTrack}
                        Start={this.state.start}
                    />
                </All.ContainerFooter>
            </All.Container>
        )
    }
}

export default App;
