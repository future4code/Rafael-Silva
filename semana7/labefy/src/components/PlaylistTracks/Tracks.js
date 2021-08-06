import React from "react";
import * as All from "./Tracks.styles"
import play from "../../images/play_arrow_black_24dp.svg"
import pause from "../../images/pause_black_24dp.svg"
import remover from "../../images/close_black_24dp.svg"
import remove from "../../images/close_black_24dp.svg";

export default class Tracks extends React.Component {
    state = {
        statePlay: false
    }

    PlayTrack = () => {
        this.setState({
            statePlay: !this.state.statePlay
        })
    }

    PauseTrack = () => {
        this.setState({
            statePlay: !this.state.statePlay
        })
    }

    render() {
        return (
            <All.ContainerTracks>

                <All.Tracks>
                    <h3>Músicas</h3>


                    {this.state.statePlay === false
                        ? (
                            this.props.Tracks.map((track) => {
                                return (
                                    <All.ListTracks key={track.id}>
                                        <button onClick={() => this.props.PlayTrack(track)}>
                                            <img src={play} alt="play"/>
                                        </button>

                                        <div>
                                            <h4>{track.name}</h4>
                                            <p>{track.artist}</p>
                                        </div>

                                        <All.ButtonContainer>
                                            <button>
                                                <img src={remove} alt={"Remover Musica"}
                                                     onClick={() => this.props.RemoveTrack(track.id)}

                                                />
                                            </button>
                                        </All.ButtonContainer>
                                    </All.ListTracks>
                                )
                            })
                        )
                        : (

                        this.props.Tracks.map((track) => {
                        return (
                        <All.ListTracks key={track.id}>
                        <button onClick={() => this.props.PauseTrack(track)}>
                        <img src={pause} alt="pause"/>
                        </button>

                        <div>
                        <h4>{track.name}</h4>
                        <p>{track.artist}</p>
                        </div>
                        </All.ListTracks>
                        )
                    })
                        )}


                        </All.Tracks>

                        <span></span>

                        <All.NewMusic>
                        <h3>Adicione uma nova música</h3>


                        <div>
                        <p>Nome:</p>

                        <input type="text"
                        value={this.props.InputTrackName}
                        onChange={this.props.onChangeInputTrackName}
                        placeholder={"Nome da Música"}

                        />
                        </div>

                        <div>
                        <p>Artista ou Banda:</p>

                        <input type="text"
                        value={this.props.InputTrackArtist}
                        onChange={this.props.onChangeInputTrackArtist}
                        placeholder={"Artistas Relacionados"}
                        />
                        </div>

                        <div>
                        <p>Link da Música:</p>

                        <input type="text"
                        value={this.props.InputTrack}
                        onChange={this.props.onChangeInputTrack}
                        />
                        </div>


                        <button onClick={this.props.NewTrack}>Enviar</button>

                        </All.NewMusic>

                        </All.ContainerTracks>
                        )
                    }
                    }