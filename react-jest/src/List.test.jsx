const { render, fireEvent, cleanup } = require("@testing-library/react");
import React from 'react';
import List from './List';

afterEach(cleanup);

test("Botão deve conter o texto Clique aqui para carregar", () => {

    const { getByText } = render(<List />);

    expect(getByText("Clique aqui para carregar")).toBeInTheDocument();

});

test("Botão deve conter o texto Clicado após evento click", () => {
    const { getByText } = render(<List />);

    fireEvent.click(getByText("Clique aqui para carregar"));

    expect(getByText('Clicado')).toBeInTheDocument();
});

test("Após click o componente deve renderizar uma lista de nomes", () => {
    const { getByText } = render(<List />);

    fireEvent.click(getByText("Clique aqui para carregar"));

    const { getAllByTestId } = render(<List />);
    const nomesComponent = getAllByTestId("nomes").map(value => value.textContent);

    expect(['Carlos', 'Pedro', 'Ana', 'João']).toEqual(nomesComponent);
});

