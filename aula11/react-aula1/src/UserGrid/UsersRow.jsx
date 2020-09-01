import React, { Component } from 'react';

class UsersRow extends Component {
    render() { 
        return ( 
        <tr>
            <td>{ this.props.id }</td>
            <td>{ this.props.nome }</td>
            <td>{ this.props.email }</td>
            <td>{ this.props.telefone }</td>
        </tr> 
        );
    }
}
 
export default UsersRow;