const rotas = require('express').Router()
const conexao = require('./config/conexao')

rotas.get('/', (req, res) =>{
    let sql = 'select * from tb_transacoes'

    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json(rows)
    })
})

rotas.get('/:id', (req, res) =>{
    const {id} = req.params
    let sql = 'select * from tb_transacoes where id_transferencia = ?' 
    conexao.query(sql, [id], (erro, rows, fields) =>{
        if(erro)throw erro
        res.json(rows[0])
    })
})

rotas.delete('/:id', (req, res) =>{
    const {id} = req.params
    let sql = `delete from tb_transacoes where id_transferencia = '${id}'`

    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json({status:'transação  excluída com sucesso'})
    })
})

rotas.post('/', (req, res) =>{
    const {nomeCliente,valorTransacao,contaCliente} = req.body
    let sql = `insert into tb_transacoes(nomeCliente,valorTransacao,contaCliente) values('${nomeCliente}','${valorTransacao}','${contaCliente}')`

    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json({status:"transação  feita com sucesso"})
    })
})


rotas.put('/:id', (req, res) =>{
    const {id} = req.params
    const{nomeCliente,valorTransacao,contaCliente} = req.body
    let sql = `update tb_transacoes set 
    nomeCliente = '${nomeCliente}', 
    valorTransacao = '${valorTransacao}',
    contaCliente = '${contaCliente}'
    where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) =>{
        if(erro)throw erro
        res.json({status:"transação editada com sucesso"})
    })
})

module.exports = rotas