class Aluno {
    constructor(dados) {
        this.id = dados.alunoId
        this.nome = dados.nome
        this.nascimento = dados.nascimento
    }
    static readAll(){
        return "SELECT * FROM alunos"
    }

    static create(dados){
        return `INSERT INTO alunos VALUES (default, '${dados.nome}', '${dados.nascimento}')`;
    }

    static update(dados){
        return `UPDATE alunos SET nome = '${dados.nome}', nascimento = '${dados.nascimento}' WHERE alunoId = ${dados.id} `;
    }

    static delete(id){
        return `DELETE FROM alunos WHERE alunoId = ${id}`
    }
}

module.exports = Aluno