import React, { Component } from 'react';
import './style.css';

export default class NameList extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props.names);
    // }

    render() {
        return (
        <>
            <h1>{this.props.children}</h1>
            <ul>
                {this.props.names.map((value, index) => 
                    <li key={index}>{value} 
                        <button onClick={() => this.props.removeName(index)}>remover</button>
                    </li>
                )}
            </ul>
        </>
        );
    }
}