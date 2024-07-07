import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';

const root = document.getElementById('root');

// Usando createRoot em vez de ReactDOM.render para React 18
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Exemplo de requisição à API
axios.get('http://localhost:3030/api/test')
  .then(response => {
    console.log('Resposta da API:', response.data);
  })
  .catch(error => {
    console.error('Erro ao acessar API:', error);
  });
