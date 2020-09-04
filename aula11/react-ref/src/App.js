import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.inputNomeRef = React.createRef();
    this.inputSobreNomeRef = React.createRef();
  }

  handleRegister(event) {
    event.preventDefault();
    console.log(this.inputNomeRef.current.value);
  }

  nomeBlur = (ev) => {
    console.log(this.inputNomeRef.current);
  }

  render() {
    return (
    <form>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" onBlur={this.nomeBlur} ref={this.inputNomeRef} name="nome" />
      </div>
      <div>
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" ref={this.inputSobreNomeRef} name="sobrenome" />
      </div>
      <button onClick={(event) => this.handleRegister(event)}>Cadastro</button>
    </form>
    );
  }
}