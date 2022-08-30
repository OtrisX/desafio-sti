const Universidade = require("./universidadeClass")

module.exports = class Aluno{
    constructor(data){
        this.notas = data
        this.alunos = []

        this.inicializar()
    }
    inicializar(){
        let alunos = []
        this.notas.forEach(aluno => {
            if(!alunos.includes(aluno.matricula) && aluno.matricula != "MATRICULA" && aluno.matricula != "") {
                alunos.push(aluno.matricula)
                this.alunos.push({
                    matricula: aluno.matricula,
                    cr: ""
                })
            }
        })
        
        alunos.forEach(aluno => {
            this.alunos.find(x => x.matricula == aluno).cr = this.calcularCR(aluno)
        })
    }
    
    calcularCR(matricula) {
        const aluno = this.notas.filter(aluno => {
            return aluno.matricula == matricula
        })
        let notaXcargo = 0
        let cargo = 0
        aluno.forEach(disciplina => {
            notaXcargo += parseInt(disciplina.nota * disciplina.carga_horaria)
            cargo += parseInt(disciplina.carga_horaria)
        })
        return (notaXcargo/cargo).toFixed(2)
    }
}
