const fs = require("fs")

module.exports = class Universidade{
    constructor(dir,path) {
        this.notas = []

        //adicionar o csv a this.notas
        this.lerCSV(dir,path)

    }
    novaNota(matricula, cod_disciplina, cod_cursos, nota, carga_horaria, ano_semestre){
        let data = {"matricula": matricula, "cod_disciplina": cod_disciplina, "cod_cursos": cod_cursos, "nota": nota, "carga_horaria": carga_horaria, "ano_semestre": ano_semestre}
        this.notas.push(data)
    }
    lerCSV(dir,path){
        let dataRaw = fs.readFileSync(dir+path, "utf-8")
        let dataLineArray = dataRaw.split(/\r\n|\r|\n/)
        let dataArray = []
        dataLineArray.forEach(line => {
            dataArray.push(line.split(","))
        })
        dataArray.forEach(e => {
            this.novaNota(
                e[0],
                e[1],
                e[2],
                e[3],
                e[4],
                e[5]
            )
    })}
}


