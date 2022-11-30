const Aluno = require('../models/aluno');

const con = require('../models/connectDAO');

const listarAlunos = (req, res) => {
    con.query(Aluno.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const criarAluno = (req, res) => { 
    con.query (Aluno.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).json({id: result.insertId}).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const alterarAluno = (req, res) => {
    con.query(Aluno.update(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirAluno = (req, res) => {
    con.query(Aluno.delete(req.params.id), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

module.exports = {
    criarAluno,
    alterarAluno,
    listarAlunos,
    excluirAluno
}