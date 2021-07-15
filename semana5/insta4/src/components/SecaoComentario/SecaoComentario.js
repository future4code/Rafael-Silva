import React, {Component} from 'react'
import * as all from "./SecaoComentario.styles"

export class SecaoComentario extends Component {
    state = {
        valueComment: "",
    }

    onChangeComentario = (event) => {
        this.setState({
            valueComment: event.target.value
        })

        console.log(event.target.value)
    }

    render() {
        return (
            <all.CommentContainer>
                <all.InputComentario
                    placeholder={'Comentário'}
                    value={this.state.valueComment}
                    onChange={this.onChangeComentario}
                />
                <button onClick={this.props.aoEnviar}>Enviar</button>
            </all.CommentContainer>
        )
    }
}
