import React, { useState } from 'react';

export default function List() {
    const [label, setLabel] = useState('Clique aqui para carregar');
    const [nomes, setNomes] = useState([]);

    const toggle = () => {
        setLabel('Clicado');
        setNomes([
            { nome: "Carlos" },
            { nome: "Pedro" },
            { nome: "Ana" },
            { nome: "João" },
        ]);
    }


    return (
        <>
            <section>
                {nomes.map((value, key) => <div key={key} data-testid="nomes">{value.nome}</div>)}
            </section>
            <button onClick={toggle}>{label}</button>
        </>
    );
}