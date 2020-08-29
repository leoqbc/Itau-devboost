const clientes = [
    {
        clienteID: "asd23423-sad3211-ssd546ad",
        clienteNome: "João Faria",
        clienteEmail: "joao@mail.com",
        clienteCPF: "222.222.222-22",
        contaPoupanca: 1500.00,
        contaCorrente: {
            id: "2h3i12uh-0ggh0d9h-93hb9fh",
            saldo: 253.22,
            movimentacao: [
                {
                    operacao: "Pizza Express",
                    custo: 120.22,
                    action: "remove"
                },
                {
                    operacao: "O Rei Merlin",
                    custo: 40.22,
                    action: "remove"
                },
                {
                    operacao: "Deposito Cliente",
                    custo: 120.22,
                    action: "add"
                }
            ]
        }
    },
    {
        clienteID: "aasd3f54ndc-09n5058376-29385029v8n",
        clienteNome: "Pedro Faria",
        clienteEmail: "pedro@mail.com",
        clienteCPF: "333.333.333-22",
        contaPoupanca: 200.00,
        contaCorrente: {
            id: "2sadas12-123adhsadh-93hb23ra",
            saldo: 2253.22,
            movimentacao: [
                {
                    operacao: "Autoposto SuperGas",
                    custo: 30.22,
                    action: "remove"
                },
                {
                    operacao: "Restaurante BoFood",
                    custo: 230.22,
                    action: "remove"
                },
                {
                    operacao: "Fast soup",
                    custo: 80.22,
                    action: "remove"
                }
            ]
        }
    },
    {
        clienteID: "bhj3b1pk2-hhad43287-8h9h9g873g94",
        clienteNome: "João Rubens de Souza",
        clienteEmail: "joao@mail.com",
        clienteCPF: "132.321.456-22",
        contaPoupanca: 1500.00,
        contaCorrente: {
            id: "2saasd12-asdsad2312dh-45sdhb2ra",
            saldo: 253.22,
            movimentacao: [
                {
                    operacao: "Deposito Luiz da Silva",
                    custo: 998.44,
                    action: "add"
                },
                {
                    operacao: "Deposito Mapple LTDA",
                    custo: 575.89,
                    action: "add"
                },
                {
                    operacao: "Compra BestBuyer",
                    custo: 1320.22,
                    action: "remove"
                }
            ]
        }
    }
];

export default clientes;