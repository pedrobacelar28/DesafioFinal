import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import AberturaPage from './abertura/AberturaPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import ArtistasFavoritos from './artistasFavoritos/ArtistasFavoritos';
import BonJovi from './artistas/BonJovi';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/login':
      case '/cadastro':
        document.body.className = 'pages-body';
        break;
      case '/artistas-favoritos':
        document.body.className = 'artistas-body';
        break;
        case '/bonjovi':
        document.body.className = 'bonjovi-body';
        break;
      default:
        document.body.className = 'abertura-body';
        break;
    }
  }, [location.pathname]);

  // Verifica se o usuário está logado com base no token armazenado no localStorage
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Routes>
      {/* Rota inicial: sempre exibe a página de abertura */}
      <Route path="/" element={<AberturaPage />} />
      {/* Rota para login */}
      <Route path="/login" element={<LoginPage />} />
      {/* Rota para cadastro */}
      <Route path="/cadastro" element={<CadastroPage />} />
      {/* Rota para artistas favoritos: requer login */}
      <Route path="/artistas-favoritos" element={isLoggedIn ? <ArtistasFavoritos /> : <Navigate to="/login" />} />
      <Route path="/bonjovi" element={isLoggedIn ? <BonJovi /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
