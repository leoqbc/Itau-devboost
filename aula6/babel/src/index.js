class Cliente {
    constructor(nome='Zé ninguém', email='sem email', telefone='0000-0000') {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

const cliente1 = new Cliente('João', 'jo@gmailcom');

console.log(cliente1);