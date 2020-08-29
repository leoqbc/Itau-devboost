import clientesData from './dados';
import Cliente from './Cliente';
import ContaPoupanca from './ContaPoupanca';
import ContaCorrente from './ContaCorrente';
import Movimentacao from './Movimentacao';


clientesData.forEach((clienteData) => {
    const cliente1 = new Cliente({ 
        id: clienteData.clienteID, 
        nome: clienteData.clienteNome,
        email: clienteData.clienteEmail,
        cpf: clienteData.clienteCPF,
        poupanca: new ContaPoupanca({ 
            saldo: clienteData.contaPoupanca
        }),
        corrente: new ContaCorrente({
            id: clienteData.contaCorrente.id,
            saldo: clienteData.contaCorrente.saldo,
            movimentacao: new Movimentacao(clienteData.contaCorrente.movimentacao)  
        })
    });

    console.log(cliente1);
});