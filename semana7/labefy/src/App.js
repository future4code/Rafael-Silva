import React from 'react'
import * as All from "./App.styles"

//COMPONENTS
import User from "./components/User/User";
import Playlist from "./components/PlaylistsSidebar/Playlist";
import ShowPlaylistsSiderbar from "./components/PlaylistsSidebar/ShowPlaylistsSiderbar";
import ListPlaylist from "./components/ListPlaylists/ListPlaylist";


//REQUESTS
import axios from "axios";

export const headers = {
    headers: {
        Authorization: "rafael-nascimento-silva"
    }
}

class App extends React.Component {
    state = {
        inputPlaylistName: "",
        playlists: [],
        quantity: 0
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
        } catch (e) {
            alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
        }
    }

    deletePlaylist = async (playlistId) => {

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
                    />

                </All.ContainerMain>

                <All.ContainerFooter>
                    <p>teste</p>
                </All.ContainerFooter>
            </All.Container>
        )
    }
}

export default App;
