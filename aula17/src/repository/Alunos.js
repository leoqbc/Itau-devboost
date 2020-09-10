class Alunos {
    constructor() {
        this.alunos = {
            data: []
        };
    }

    getAlunos() {
        return this.alunos.data;
    }
}

// export Alunos
module.exports.Alunos = Alunos;