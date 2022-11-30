const express = require('express');
const router = express.Router();

const Aluno = require("../controllers/alunosController")

router.get("/read", Aluno.listarAlunos)
router.post("/create", Aluno.criarAluno)
router.put("/update", Aluno.alterarAluno)
router.delete("/delete/:id", Aluno.excluirAluno)

module.exports = router;
