export default class ContaPoupanca {
    constructor({ saldo }) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }
}