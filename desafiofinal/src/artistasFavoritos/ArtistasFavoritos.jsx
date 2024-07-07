import React from 'react';
import { useNavigate } from 'react-router-dom';
import './artistasFavoritos.css';

const ArtistasFavoritos = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div id="menuLateral">
        <div id="abas">
          <div id="logoBox">
            <div id="logo">iSpotify®</div>
          </div>
          <div id="artistasBox">
            <div id="artistas" onClick={() => handleNavigation('/artistas-favoritos')}>
              <i id="icones" className="material-icons">album</i>
              Artistas
            </div>
          </div>
          <div id="playlistDiariaBox">
            <div id="playlistDiaria"> <i id="icones" className="material-icons">queue_music</i>Playlist Diária</div>
          </div>
          <div id="musicasCurtidasBox">
            <div id="musicasCurtidas">
              <i id="icones" className="material-icons">favorite</i>
              Músicas Curtidas
            </div>
          </div>
          <div id="minhaContaBox">
            <div id="minhaconta"> <i id="icones" className="material-icons">account_circle</i>Minha Conta</div>
          </div>
        </div>
        <div id="logoutBox">
          <div id="logout">
            <i id="icones" className="material-icons">logout</i>
            Logout
          </div>
        </div>
      </div>

      <div id="cardPrincipal">
        <div id="titulo">Artistas</div>
        <div id="artistasColuna1">
          {renderArtista("https://i.scdn.co/image/ab6761610000f17852aade0d2ea19706074da4b9", "Bon Jovi", "/bonjovi", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f17867bc48f32d1cc16497865361", "Charlie Brown Jr.", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f17850defaf9fc059a1efc541f4c", "Guns N'Roses", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f178c4c77549095c86acb4e77b37", "AC/DC", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f178bc611be88d151416dba687c8", "Capital Inicial", "#", handleNavigation)}
        </div>
        <div id="artistasColuna2">
          {renderArtista("https://i.scdn.co/image/ab6761610000f178cdc54a4aa9383da888b4f341", "Sabotage", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f17843a0d1ae0af71095fcb26726", "Racionais MC's", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f1786859359feba9f72147e6f9c7", "Dexter", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f1782218991c713ff16502c42a2d", "Major RD", "#", handleNavigation)}
          {renderArtista("https://i.scdn.co/image/ab6761610000f17848d62acd2e6408096141a088", "KayBlack", "#", handleNavigation)}
        </div>
      </div>
    </div>
  );
};

const renderArtista = (imgSrc, nome, link, navigateHandler) => {
  return (
    <div id="banner" onClick={() => navigateHandler(link)}>
      <img src={imgSrc} alt={nome} />
      <div id="artistaNome">{nome}</div>
      <div id="categoria">Artista</div>
    </div>
  );
};

export default ArtistasFavoritos;
