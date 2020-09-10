const { Alunos } = require('../repository/Alunos');
const { response } = require('express');

require('../repository/Alunos');

const alunosRepo = new Alunos();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

exports.getAlunos = (req, res) => {
    return res.send(alunosRepo.getAlunos());
}

exports.postAluno = (req, res) => {
    // Demeter Law
    alunosRepo.alunos.data.push(req.body);

    return res.status(201).send(); 
}

// Auth Middleware
exports.auth = (req, res, next) => {
    const auth = req.header('Authorization');

    if (!auth || token !== auth) {
        return res.status(401).send();
    }
    
    next();
}