import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import email from "./img/email.png";
import place from "./img/place.png";

function App() {
    return (
        <div className="App">
            <div className="page-section-container">
                <h2>Dados pessoais</h2>
                <CardGrande
                    imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
                    nome="Rafael Nascimento Silva"
                    descricao="Oi sou Rafael, tenho 22 anos, sou formado em técnico em eletrônica e atualmente estudo Web Full Stack na Labenu"
                />

                <ImagemButton
                    imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
                    texto="Ver mais"
                />
            </div>

            <div className="page-section-container">
                <CardPequeno
                    imagem={email} alt="Icone Email"
                    nome="Email"
                    descricao="ehnois@email.com.br"
                />

                <CardPequeno
                    imagem={place} alt="Icone Endereço"
                    nome="Endereço"
                    descricao="Rua Eh Nois na Fita"
                />
            </div>

            <div className="page-section-container">
                <h2>Experiências profissionais</h2>
                <CardGrande
                    imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
                    nome="Labenu"
                    descricao="Web Full Stack"
                />
                <CardGrande
                    imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
                    nome="Senai"
                    descricao="Técnico em Eletrônica"
                />

            </div>

            <div className="page-section-container">
                <h2>Minhas redes sociais</h2>
                <ImagemButton
                    imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
                    texto="Facebook"
                />

                <ImagemButton
                    imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
                    texto="Twitter"
                />
            </div>
        </div>
    );
}

export default App;
