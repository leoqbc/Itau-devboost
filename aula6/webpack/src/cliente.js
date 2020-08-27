class Cliente {
    constructor(nome, email) {
        this._nome = nome;
        this._email = email;
        this._outs = [{
            oper: 'Pizza Hut',
            cost: 121.50
        },
        {
            oper: 'Camiseta',
            cost: 70.50
        }];
    }

    get nome() {
        return this._nome.toUpperCase();
    }

    set nome(value) {
        this._nome = value;
    }

    getOperations() {
        const saidas = this._outs.map(this.formatData.bind(this));
        console.log(saidas);
    }

    formatData({oper, cost} = out) {
        return {
            customer: this.nome,
            oper,
            cost
        };
    }
}

export default Cliente;