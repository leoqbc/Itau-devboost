const express = require("express");

const controller = require("../src/controllers/AlunosController");

const app = express();

// habilita no express aceitar json no body
app.use(express.json()); // JSON.parse

// Request
// POST http
// HEADERS (Content-Type: application/json)
// body..

// Status Code
// 200 Ok
// 201 Created
// 202 Empty
// 300 
// 400 

// middleware global
app.use(controller.auth);

// RESTful
// get, post, put(objeto inteiro), patch(só o campo), delete 
app.get("/alunos", controller.getAlunos);
app.post("/alunos", controller.postAluno);
// app.put()
// app.delete()

app.listen('8080', () => {
    console.log('Servidor de pé!');
});