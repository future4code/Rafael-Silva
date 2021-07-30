import React from "react";
import * as All from "./ListPlaylist.styles"
import remove from "../../images/close_black_24dp.svg"
import config from "../../images/settings_black_24dp.svg"

export default class ListPlaylistItem extends React.Component {
    render() {
        return (
            <All.ContainerItem>
                <li>{this.props.PlaylistName}</li>

                <div>
                    <button>
                        <img src={config} alt={"Config Playlist"}
                             onClick={this.props.PlaylistConfig}
                        />
                    </button>
                    <button>
                        <img src={remove} alt={"Remover Playlist"}
                             onClick={this.props.RemovePlaylist}

                        />
                    </button>
                </div>
            </All.ContainerItem>
        )
    }
}