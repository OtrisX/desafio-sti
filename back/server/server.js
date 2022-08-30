require('dotenv').config()
const express = require('express');
const fs = require("fs")
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 9000
const Universidade = require("../classes/universidadeClass")
const Alunos = require("../classes/alunosClass")
const Cursos = require ("../classes/cursosClass")
app.use(cors())



app.get("/alunos/notas",(req, res, next) => {
    const uff = new Universidade(__dirname,"/../data/notas.csv")
    const alunos = new Alunos(uff.notas)
    
    res.send(alunos.alunos)
})

app.get("/cursos/notas",(req, res, next) => {
    const uff = new Universidade(__dirname,"/../data/notas.csv")
    const cursos = new Cursos(uff.notas)
    
    res.send(cursos.cursos)
})




app.listen(PORT, err => {
    if(err) {console.log("Error")}
    console.log(`Server started on port: ${PORT}`)
})