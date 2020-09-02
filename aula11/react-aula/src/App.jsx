import React, { Component } from 'react';
import NameList from './NameList';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            names: ['Leonardo', 'Carlos']
        };
        // handleClick = () => {
        //     console.log(this);
        // }
        this.name = React.createRef();
    }

    handleClick() {
        // destructuring
        const { names } = this.state;

        this.setState({
            names: [...names, this.name.current.value]
        });

        // this.setState(prevState => ({ names: [ ...prevState.names, prevState.name ] }) );
    }

    removeName(index) {
        const names = this.state.names;

        const newNames = names.filter((nome, arrIndex) => arrIndex !== index);

        this.setState({
            names: newNames
        });
    }

    render() {
        return (
            <div className="meu-componente">
                {this.state.texto}
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" ref={this.name} />
                    <button onClick={() => this.handleClick()}>Adicionar</button>
                </div>
                <NameList names={this.state.names} removeName={(index) => this.removeName(index)}>
                    Lista de nomes
                </NameList>
            </div>
        );
    }
}

export default App;