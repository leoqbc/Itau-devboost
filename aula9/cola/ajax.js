// Old AJAX
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    }
}
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhttp.send();

// ========== Axios ==============
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users').then(response => console.log(response.data));

// ========== Promises ===========

function request() {
    return new Promise((resolve, reject) => {
        const retorno = true;

        if (retorno === false) {
            reject('Erro ao tratar');
        }

        setInterval(() => resolve({ status: 'ok' }), 1000);
    });
}