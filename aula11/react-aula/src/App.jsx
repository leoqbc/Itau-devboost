import React, { Component } from 'react';
import NameList from './NameList';

class App extends Component {
    componentWillMount() {
        this.names = ["Pedro", "Carlos", "João"];
    }

    render() {
        return (
            <div className="meu-componente">
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" />
                </div>
                <NameList names={this.names}>
                    Lista de nomes
                </NameList>
            </div>
        );
    }
}

export default App;