export default class Cliente {
    constructor({ id, nome, email, cpf, poupanca, corrente }) {
        this._id = id;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.poupanca = poupanca;
        this.corrente = corrente;
    }

    get id() {
        return this._id;
    }
}