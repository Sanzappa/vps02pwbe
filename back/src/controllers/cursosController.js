const Curso = require('../models/cursos');

const con = require('../models/connectDAO');

const listarCursos = (req, res) => {
    con.query(Curso.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
module.exports = {
    listarCursos
}