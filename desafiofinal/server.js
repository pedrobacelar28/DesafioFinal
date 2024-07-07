const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;

// Configuração do CORS para permitir requisições do localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Rota de cadastro de usuário
app.post('/api/users/login', (req, res) => {
  // Lógica para cadastrar o usuário
  res.json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota de login de usuário
app.post('/api/users', (req, res) => {
  // Lógica para realizar o login do usuário
  res.json({ token: 'token_gerado_pelo_servidor' });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor da API rodando em http://localhost:${port}`);
});
