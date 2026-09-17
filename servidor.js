const express = require("express");

const app = express();

let ALUNOS = [
    {id: 1, nome: "Bernardo", curso: "Desenvovlimento de Sistema"},
    {id: 2, nome: "Pedro", curso: "Sistema da informação"},
    {id: 3, nome: "Julia", curso: "Banco de dados"},
    {id: 4, nome: "Bernardo", curso: "Administrção"},
    {id: 5, nome: "Bernardo", curso: "Redes de computadores"},
]

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Alunos funcionando"
    })
})

app.get("/alunos", (req, res)=>{
    res.json(ALunos);
})

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso`);
    console.log(`http://localhost:${PORTA}`);
})