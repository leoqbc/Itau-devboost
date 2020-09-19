
class Calculadora {

    constructor(number, requestLib) {
        this.value = number;
        this.requestLib = requestLib;
    }

    sum(value) {
        this.value += value;
    }

    result() {
        return this.value;
    }

    sub(value) {
        this.value -= value;
    }

    expression(fn) {
        this.value = fn(this.value);
    }

    readData() {
        return this.requestLib.get("http://teste.com.br/jao");
    }

}

module.exports = { Calculadora };