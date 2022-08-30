const Universidade = require("./universidadeClass")

module.exports = class Cursos{
    constructor(data){
        this.notas = data
        this.cursos = []

        this.inicializar()
    }
    inicializar(){
        let cursos = []
        this.notas.forEach(curso => {
            if(!cursos.includes(curso.cod_cursos) && curso.cod_cursos != "COD_CURSO" && curso.cod_cursos != undefined) {
                cursos.push(curso.cod_cursos)
                this.cursos.push({
                    curso: curso.cod_cursos,
                    cr: ""
                })
            }
        })
        cursos.forEach(curso => {
            this.cursos.find(x => x.curso == curso).cr = this.calcularCR(curso)
        })
    }
    calcularCR(codigo){
        const curso = this.notas.filter(curso => {
            return curso.cod_cursos == codigo
        })
        let notaXcargo = 0
        let cargo = 0
        curso.forEach(disciplina => {
            notaXcargo += parseInt(disciplina.nota * disciplina.carga_horaria)
            cargo += parseInt(disciplina.carga_horaria)
        })
        return (notaXcargo/cargo).toFixed(2)
    }

}

