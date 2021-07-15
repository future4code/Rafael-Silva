import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1011/50'}
          fotoPost={'https://picsum.photos/id/101/200/150'}
        />

          <Post
              nomeUsuario={'rafael'}
              fotoUsuario={'https://picsum.photos/id/1005/50'}
              fotoPost={'https://picsum.photos/seed/picsum/200/150'}
          />

          <Post
              nomeUsuario={'gustavo'}
              fotoUsuario={'https://picsum.photos/id/1012/50'}
              fotoPost={'https://picsum.photos/id/237/200/150'}
          />
      </MainContainer>
    );
  }
}

export default App;
