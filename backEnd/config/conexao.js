require('dotenv').config();
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'db_banco'
})

conexao.connect((erro) => {
    if(erro)throw erro;
    console.log('Estamos conectados a bade de dados')
})

module.exports = conexao