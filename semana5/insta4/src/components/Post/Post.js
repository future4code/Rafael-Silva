import React from 'react'
import * as all from "./Post.styles"

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconSave} from "../IconSave/IconSave";

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSaveBranco from '../../img/turned_in_not_black_24dp.svg'
import iconeSavePreto from '../../img/turned_in_black_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


class Post extends React.Component {
    state = {
        curtido: false,
        numeroCurtidas: 0,
        comentando: false,
        numeroComentarios: 0,
        salvo: false
    }

    onClickCurtida = () => {
        let curtida = this.state.curtido

        if (curtida) {
            this.setState({
                curtido: !this.state.curtido,
                numeroCurtidas: this.state.numeroCurtidas - 1
            })
        } else {
            this.setState({
                curtido: !this.state.curtido,
                numeroCurtidas: this.state.numeroCurtidas + 1
            })
        }
    }

    onClickComentario = () => {
        this.setState({
            comentando: !this.state.comentando
        })
    }

    aoEnviarComentario = () => {
        this.setState({
            comentando: false,
            numeroComentarios: this.state.numeroComentarios + 1
        })
    }

    onClickSave = () => {
        this.setState({
            salvo: !this.state.salvo
        })
    }


    render() {
        let iconeCurtida
        let iconeSalvo

        if (this.state.curtido) {
            iconeCurtida = iconeCoracaoPreto
        } else {
            iconeCurtida = iconeCoracaoBranco
        }

        if (this.state.salvo) {
            iconeSalvo = iconeSavePreto
        } else {
            iconeSalvo = iconeSaveBranco
        }

        let componenteComentario

        if (this.state.comentando) {
            componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
        }

        return (
            <all.PostContainer>
                <all.PostHeader>
                    <all.UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
                    <p>{this.props.nomeUsuario}</p>
                </all.PostHeader>

                <all.PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

                <all.PostFooter>
                    <div>
                        <IconeComContador
                            icone={iconeCurtida}
                            onClickIcone={this.onClickCurtida}
                            valorContador={this.state.numeroCurtidas}
                        />

                        <IconSave
                            icone={iconeSalvo}
                            onClickSave={this.onClickSave}
                        />
                    </div>

                    <IconeComContador
                        icone={iconeComentario}
                        onClickIcone={this.onClickComentario}
                        valorContador={this.state.numeroComentarios}
                    />
                </all.PostFooter>

                <all.PostComments>
                    {componenteComentario}
                </all.PostComments>
            </all.PostContainer>

        )
    }
}

export default Post