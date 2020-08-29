export default class ContaCorrente {
    constructor({ id, saldo, movimentacao }) {
        this._id = id;
        this._saldo = saldo;
        this.movimentacao = movimentacao; // injeção de dependencia
    }

    get id() {
        return this._id;
    }

    get saldo() {
        return this._saldo;
    }
}