import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import AberturaPage from './abertura/AberturaPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import ArtistasFavoritos from './artistasFavoritos/ArtistasFavoritos';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Lógica opcional para definir classes no body com base na rota
    switch (location.pathname) {
      case '/login':
      case '/cadastro':
        document.body.className = 'pages-body';
        break;
      case '/artistas-favoritos':
        document.body.className = 'artistas-body';
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
      {/* Rota inicial: se estiver logado, vai para /artistas-favoritos, senão para a página de abertura */}
      <Route path="/" element={isLoggedIn ? <Navigate to="/artistas-favoritos" /> : <AberturaPage />} />
      {/* Rota para login */}
      <Route path="/login" element={<LoginPage />} />
      {/* Rota para cadastro */}
      <Route path="/cadastro" element={<CadastroPage />} />
      {/* Rota para artistas favoritos: requer login */}
      <Route path="/artistas-favoritos" element={isLoggedIn ? <ArtistasFavoritos /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
