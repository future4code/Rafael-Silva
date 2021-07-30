import React from "react";
import * as All from "./Tracks.styles"

export default class Tracks extends React.Component {
    render() {
        return (
            <All.ContainerTracks>
                
                <All.Tracks>
                    <p>teste</p>
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
                               readOnly={true}
                        />
                    </div>


                        <button>Enviar</button>

                </All.NewMusic>

            </All.ContainerTracks>
        )
    }
}