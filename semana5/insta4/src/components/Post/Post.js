import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconSave} from "../IconSave/IconSave";

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSaveBranco from '../../img/turned_in_not_black_24dp.svg'
import iconeSavePreto from '../../img/turned_in_black_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  
  div{
    display: flex;
  }
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

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

        return <PostContainer>
            <PostHeader>
                <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
                <p>{this.props.nomeUsuario}</p>
            </PostHeader>

            <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

            <PostFooter>
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
            </PostFooter>
            {componenteComentario}
        </PostContainer>
    }
}

export default Post