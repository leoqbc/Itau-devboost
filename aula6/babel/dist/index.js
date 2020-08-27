"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cliente = function Cliente() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Zé ninguém';
  var email = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sem email';
  var telefone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0000-0000';

  _classCallCheck(this, Cliente);

  this.nome = nome;
  this.email = email;
  this.telefone = telefone;
};

var cliente1 = new Cliente('João', 'jo@gmailcom');
console.log(cliente1);