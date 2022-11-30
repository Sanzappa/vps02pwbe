const express = require('express');
const router = express.Router();

const Cursos = require("../controllers/cursosController")

router.get("/read", Cursos.listarCursos)

module.exports = router;
