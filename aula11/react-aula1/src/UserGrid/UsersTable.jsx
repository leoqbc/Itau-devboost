import React, { Component } from 'react';
import UsersRow from './UsersRow';

class UsersTable extends Component {
    getUserRows() {
        return this.props.users.map((user, index) => <UsersRow key={index} {...user} />);
    }
    render() { 
        return (
        <table id="users-table">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
            { this.getUserRows() }
        </table>
        );
    }
}
 
export default UsersTable;