import React from "react";
import * as All from "./PlayPauseTrack.styles"


export default class PlayPauseTrack extends React.Component {
    render() {
        return (
            <All.Container>

                {this.props.PlayTrack.map((play) =>{
                    return (
                        <audio key={play.id} controls autoPlay={this.props.Start}>
                            <source src={play.url} type="audio/mp3"/>
                        </audio>
                        )
                })}

            </All.Container>
        )
    }
}