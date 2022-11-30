const express = require('express');
const cors = require('cors');

const Aluno = require("./routes/alunos.routes")
const Curso = require("./routes/cursos.routes")

const app = express();
app.use(express.json());
app.use(cors());
app.use("/alunos", Aluno);
app.use("/cursos", Curso);

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});