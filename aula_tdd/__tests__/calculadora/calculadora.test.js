const axios = require("axios");
const { Calculadora } = require("../../src/Calculadora/Calculadora.js");

jest.mock("axios");

describe("Testes do componente Calculadora", () => {
    
    test("Valida se a calculadora soma", () => {
        const calculadora = new Calculadora(10);

        calculadora.sum(10);
        
        expect(calculadora.result()).toBe(20);
    });

    test("Valida se a calculadora subtração", () => {
        const calculadora = new Calculadora(10);

        calculadora.sub(5);
        
        expect(calculadora.result()).toBe(5);
    });

    test("Valida se a calculadora resolve uma expressao customizada", () => {
        const calculadora = new Calculadora(10);

        calculadora.expression(value => value ** 2);

        expect(calculadora.result()).toBe(100);
    });


    test("Valida se a calculadora resolve um callback mock", () => {
        const calculadora = new Calculadora(10);

        const fibonacci = jest.fn();

        fibonacci.mockReturnValue(15);

        calculadora.expression(fibonacci);

        expect(calculadora.result()).toBe(15);
    });

    // Mock do axios
    test("Criando um mock para o axios", async () => {
        axios.get.mockResolvedValue({
            data: [
                { nome: "Leonardo", sobrenome: "Tumadjian" }
            ]
        });


        const calc = new Calculadora(10, axios);

        const result = await calc.readData();

        expect(result.data[0]).toEqual({
            nome: "Leonardo",
            sobrenome: "Tumadjian"
        });
    });

});