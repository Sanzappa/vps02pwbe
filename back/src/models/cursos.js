class Curso {

    constructor(dados) {
        this.id = dados.cursoId
        this.curso = dados.curso
        this.duracao = dados.duracao
    }
    static readAll(){
        return "SELECT * FROM cursos"
    }
}

module.exports = Curso