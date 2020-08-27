import Cliente from './cliente';

let pessoa = "";
const active = true;

const cliente = {
    nome: 'Carlos',
    sobrenome: 'Lima'
};

// travar um objeto
Object.freeze(cliente);

// cliente.nome = 'Pedro';

for(var i = 1;i <= 10; i++) {

}

for (let c = 1; c <= 10; c++) {

}

// console.log(i, c);

if (active === true) {
    pessoa = 'Leonardo';
}

console.log(cliente);

const cliente2 = new Cliente('Leonardo', 'leo@gmail.com');

cliente2.nome = "Javascript rocks!";

console.log(cliente2.nome);

cliente2.getOperations();