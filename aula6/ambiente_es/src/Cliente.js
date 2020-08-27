export class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

export class ClienteJuridico extends Cliente {
    constructor(nome, email, cnpj) {
        super(nome, email);
        this.cnpj = cnpj;
    }
}