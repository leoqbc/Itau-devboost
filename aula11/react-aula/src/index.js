import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// (<Cliente> - errado) <Cliente /> | <Cliente></Cliente>
ReactDOM.render(<App />, document.querySelector('#root'));