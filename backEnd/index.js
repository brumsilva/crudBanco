require('./config/conexao');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const rotas = require('./rotas');

app.use('/dashboard', rotas);

app.listen(port, () => {
    console.log('Servidor está Rodando')
})