import React from 'react';
import * as All from './App.styles';
import Post from './components/Post/Post';


class App extends React.Component {
    state = {
        post: [
            {
                userName: 'paulinha',
                userPhoto: 'https://picsum.photos/id/1011/50',
                userPost: 'https://picsum.photos/id/101/200/150'
            },
            {
                userName: 'rafael',
                userPhoto: 'https://picsum.photos/id/1005/50',
                userPost: 'https://picsum.photos/seed/picsum/200/150'
            },
            {
                userName: 'gustavo',
                userPhoto: 'https://picsum.photos/id/1012/50',
                userPost: 'https://picsum.photos/id/237/200/150'
            }
        ],
        valueUserName: "",
        valueUserPhoto: "",
        valueUserPost: ""
    }


    addPost = () => {
        const userPost = {
            userName: this.state.valueUserName,
            userPhoto: `https://picsum.photos/id/${this.state.valueUserPhoto}/50`,
            userPost: `https://picsum.photos/id/${this.state.valueUserPost}/200/150`
        }

        const newPost = [userPost, ...this.state.post]

        this.setState({
            post: newPost,
            valueUserName: "",
            valueUserPhoto: "",
            valueUserPost: ""
        })
    }

    onChangeUserName = (e) => {
        this.setState({
            valueUserName: e.target.value
        })
    }

    onChangeUserPhoto = (e) => {
        this.setState({
            valueUserPhoto: e.target.value
        })
    }

    onChangeUserPost = (e) => {
        this.setState({
            valueUserPost: e.target.value
        })
    }

    render() {

        const listPost = this.state.post.map((user, index) => {
            return (
                <Post key={index}
                      nomeUsuario={user.userName}
                      fotoUsuario={user.userPhoto}
                      fotoPost={user.userPost}
                />
            )
        })

        return (
            <All.MainContainer>
                <All.i1>
                    <All.Form>
                        <h2>Adicionar Post</h2>
                        <label htmlFor="name">Nome do Usu??rio:</label>
                        <input
                            value={this.state.valueUserName}
                            onChange={this.onChangeUserName}
                            placeholder={"Nome do Usu??rio"}
                            id={"name"}
                        />

                        <label htmlFor="photo">Escolha um n??mero para a foto do usu??rio:</label>
                        <input
                            value={this.state.valueUserPhoto}
                            onChange={this.onChangeUserPhoto}
                            placeholder={"Escolha um n??mero entre 0 e 2000"}
                            id={"photo"}
                        />

                        <label htmlFor="post">Escolha um n??mero para o post do usu??rio:</label>

                        <input
                            value={this.state.valueUserPost}
                            onChange={this.onChangeUserPost}
                            placeholder={"Escolha um n??mero entre 0 e 2000"}
                            id={"post"}
                        />

                        <span>
                            <button onClick={this.addPost}>Postar</button>
                        </span>
                    </All.Form>
                </All.i1>

                <All.i2>
                    {listPost}
                </All.i2>

            </All.MainContainer>
        );
    }
}

export default App;
