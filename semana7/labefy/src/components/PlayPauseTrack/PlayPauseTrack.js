import React from "react";
import * as All from "./PlayPauseTrack.styles"


export default class PlayPauseTrack extends React.Component {
    render() {
        return (
            <All.Container>
                <audio controls >

                    {this.props.PlayTrack &&
                    <source src={this.props.PlayTrack.url}  type="audio/mpeg"/>
                    }
                </audio>
            </All.Container>
        )
    }
}