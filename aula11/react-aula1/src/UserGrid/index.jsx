import React, { Component } from 'react';
import UsersTable from './UsersTable'

class UserGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '', 
            email: '', 
            telefone: '', 
            users: []
        }
    }

    onInputChangeHandle(event) {
        const newState = {...this.state};

        newState[event.target.id] = event.target.value;

        this.setState({
            nome: newState.nome,
            email: newState.email,
            telefone: newState.telefone
        });
    }

    addHandle() {
        const users = this.state.users;
        
        users.push({
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone
        });

        this.setState({
            ...this.state,
            users
        });

        this.setState({
            ...this.state,
            nome: '',
            email: '',
            telefone: ''
        });
    }

    render() {
        return (
        <section id="user-grid">
            <div>
                <label htmlFor="user">User:</label>
                <input type="text" id="nome" onChange={this.onInputChangeHandle.bind(this)} value={ this.state.nome } placeholder="Adicione um usuário" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={this.onInputChangeHandle.bind(this)} value={ this.state.email } placeholder="Adicione um email" />
            </div>
            <div>
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" onChange={this.onInputChangeHandle.bind(this)} value={ this.state.telefone } placeholder="Adicione um telefone" />
            </div>
            <button onClick={() => this.addHandle()} >Cadastrar</button>
            <UsersTable users={this.state.users} />
        </section>
        );
    }
}

export default UserGrid;