import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bonjovi.css';

const BonJovi = () => {
  const navigate = useNavigate();

  const handleNavigateToArtistasFavoritos = () => {
    navigate('/artistas-favoritos');
  };

  return (
    <div>
      <div id="menuLateral">
        <div id="abas">
          <div id="logoBox">
            <div id="logo">iSpotify®</div>
          </div>
          <div id="artistasBox" onClick={handleNavigateToArtistasFavoritos} style={{ cursor: 'pointer' }}>
            <div id="artistas">
              <i id="icones" className="material-icons">album</i>Artistas
            </div>
          </div>
          <div id="playlistDiariaBox">
            <div id="playlistDiaria">
              <i id="icones" className="material-icons">queue_music</i>Playlist Diária
            </div>
          </div>
          <div id="musicasCurtidasBox">
            <div id="musicasCurtidas">
              <i id="icones" className="material-icons">favorite</i>Músicas Curtidas
            </div>
          </div>
          <div id="minhacontaBox">
            <div id="minhaconta">
              <i id="icones" className="material-icons">account_circle</i>Minha Conta
            </div>
          </div>
        </div>
        <div id="logoutBox">
          <div id="logout">
            <i id="icones" className="material-icons">logout</i>Logout
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="playlist-header">
          <img
            src="https://i.scdn.co/image/ab6761610000f17852aade0d2ea19706074da4b9"
            alt="Bon Jovi Cover"
            className="playlist-cover"
          />
          <div className="playlist-info">
            <div className="playlistName">Playlist</div>
            <h1>Bon Jovi</h1>
            <p className="musics">
              5 músicas <span className="duration">1h 7min</span>
            </p>
          </div>
        </div>
        <div className="playlist-songs">
          <div className="song">
            <i className="material-icons" id="playIcon">play_circle</i>
            <div className="song-info">
              <i className="material-icons" id="iconesInfo">favorite</i>
              <i className="material-icons" id="iconesInfo">download_for_offline</i>
              <i className="material-icons" id="iconesInfo">more_horiz</i>
            </div>
          </div>
          <div className="song-atributtes">
            <span>#TÍTULO</span>
            <span>ÁLBUM</span>
            <i className="material-icons" id="icones">schedule</i>
          </div>
          <div className="linha"></div>
          <div className="songs">
            <div className="artist-songs">
              <span>1. Livin' On A Prayer</span>
              <span>
                <i className="material-icons" id="icones">favorite</i>
                <i className="material-icons" id="icones">delete</i>
              </span>
            </div>
            <div className="artist-songs">
              <span>2. You Give Love A Bad Name</span>
              <span>
                <i className="material-icons" id="icones">favorite</i>
                <i className="material-icons" id="icones">delete</i>
              </span>
            </div>
            <div className="artist-songs">
              <span>3. It's My Life</span>
              <span>
                <i className="material-icons" id="icones">favorite</i>
                <i className="material-icons" id="icones">delete</i>
              </span>
            </div>
            <div className="artist-songs">
              <span>4. Always</span>
              <span>
                <i className="material-icons" id="icones">favorite</i>
                <i className="material-icons" id="icones">delete</i>
              </span>
            </div>
            <div className="artist-songs">
              <span>5. Wanted Dead Or Alive</span>
              <span>
                <i className="material-icons" id="icones">favorite</i>
                <i className="material-icons" id="icones">delete</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonJovi;
