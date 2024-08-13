const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db'); // Certifique-se de que o arquivo db.js está configurado corretamente

const app = express();
app.use(express.json());

// Rota para cadastrar um novo usuário
app.post('/usuarios', async (req, res) => {
  const { nome, usuario, email, senha } = req.body;

  // Verificar se todos os campos foram preenchidos
  if (!nome || !usuario || !email || !senha) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos' });
  }

  try {
    // Verificar se o usuário ou e-mail já existe
    const existingUser = await db('usuarios').where({ usuario }).orWhere({ email }).first();
    if (existingUser) {
      return res.status(400).json({ error: 'Usuário ou e-mail já cadastrado' });
    }

    // Criptografar a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Inserir o novo usuário no banco de dados
    const [id] = await db('usuarios').insert({
      nome,
      usuario,
      email,
      senha: hashedPassword,
      ativo: true,
    });

    // Retornar o ID do usuário criado
    res.status(201).json({ id, message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
