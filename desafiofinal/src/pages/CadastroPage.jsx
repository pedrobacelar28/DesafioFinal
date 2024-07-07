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
        role: 'user' 
      });
      console.log('Usuário cadastrado com sucesso:', response);
      
      navigate('/artistas-favoritos');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="title">iSpotify®</div>
      <div className="subtitle">Inscreva-se com uma conta grátis no iSpotify®</div>
      <input type="text" className="input-box" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="input-box" placeholder="CRIE UMA SENHA" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" className="input-box" placeholder="COMO DEVEMOS TE CHAMAR?" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="login-button" onClick={handleSignup}>Cadastrar</button>
      <div className="signup-link">
        JÁ É USUÁRIO DO iSPOTIFY? <a href="/login">FAÇA LOGIN</a>
      </div>
    </div>
  );
}

export default CadastroPage;
