import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './pages.css';

function CadastroPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        role: 'user'  // Defina o papel conforme necessário
      });
      console.log('Usuário cadastrado com sucesso:', response);
      // Aqui você pode redirecionar para outra página ou realizar outras ações após o cadastro
      navigate('/artistas-favoritos');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="title">iSpotify</div>
      <div className="subtitle">Inscreva-se com uma conta grátis no iSpotify</div>
      <input type="text" className="input-box" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className="input-box" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="input-box" placeholder="Crie uma senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="login-button" onClick={handleSignup}>Cadastrar</button>
      <div className="signup-link">
        JÁ É USUÁRIO DO iSPOTIFY? <a href="/login">FAÇA LOGIN</a>
      </div>
    </div>
  );
}

export default CadastroPage;
