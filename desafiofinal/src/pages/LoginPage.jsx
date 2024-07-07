import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './pages.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', {
        email,
        password
      });
      console.log('Login bem-sucedido. Token JWT:', response.data.token);
      localStorage.setItem('token', response.data.token);
      // Aqui você pode redirecionar para outra página ou realizar outras ações após o login
      navigate('/artistas-favoritos');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="title">iSpotify</div>
      <div className="subtitle">Faça login na sua conta iSpotify</div>
      <input type="text" className="input-box" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="input-box" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <div className="signup-link">
        NÃO TEM UMA CONTA? <a href="/cadastro">REGISTRE-SE</a>
      </div>
    </div>
  );
}

export default LoginPage;
