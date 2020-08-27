let nome = "Leonardo";

const sobrenome = "Tumadjian";

// não use var / use o mínimo possível

console.log(nome + ` ${sobrenome}`);

function vardoida() {
    let teste = 5;
    console.log(teste);
    
}

if (true == true) {
    let valor = 123;
}

for (let i = 1;i <= 10;i++) {

}

// const conter = 1;

// conter = conter + 1;
// conter += 1;

const aluno = { nome: "Pedro" };

// aluno.nome = "Carlos";

Object.freeze(aluno);

aluno.nome = "leonardo";

console.log(aluno);

const input = `<div>
                 <label>${nome}</lavel>
                 <input type="text">'
               </div>`;

function soma(valor1 = 1, valor2 = 1) {
    return valor1 + valor2;
}

console.log(soma(12, 45));

const getvalue = function () { this.teste.bind(this) };

// IIFE
(function () {
    
})();

// JSON = javascript object notation
// { "valor": 123 }

const cliente = {
    nome: null,
    
    email: null,

    nomes: [
        'Lucas',
        'Leandro',
        'Fabiano',
        'Gabriela',
        'Michele'
    ],

    getNome: function () {
        this.nome = 'Messias';
        console.log(this.nome);
    },

    displayNomes: function () {
        this.nomes.map((valor, indice) => this.formatName(valor, indice));
    },

    formatName: function(nome, indice) {
        console.log(indice+1 + '. ' + nome);
    }
};

cliente.getNome();
cliente.displayNomes();

window.name = 'teste';

console.log(window.name);

function subtracao({val2, val1}) {
    console.log(val1, val2);
}

subtracao({ val1: 12, val2: 11 });

const cliente2 = {
    nome: "João Pedro",
    email: "jo@mail.com"
}

const cliente2_diferente = {
    ...cliente2,
    nome: 'Alexandro',
    cpf: '355.554.544-22'
}

// OOP
const cliente3 = Object.assign({}, cliente2);

cliente3.nome = 'Nome novo';

console.log(cliente3);

const novoArr = [1, 2, 4, 5].map((value) => value * 2);

const filtro = [1, 2, 3, 4, 5, 6, 7].filter((value, index) => value >= 4);

console.log(novoArr);

console.log(filtro);

const fatorial = [5, 4, 3, 2, 1].reduce((acc, value) => acc * value, 1);

console.log(fatorial);

let numeros = [4, 3, 2, 1];

numeros.forEach((el, index) => {
    console.log(el);
});

function lista() {
    return {
        nome: "Leonardo",
        sobrenome2: "Tumadjian"
    };
}

const { sobrenome2 } = lista(); // ex: Tupla

console.log(sobrenome2);