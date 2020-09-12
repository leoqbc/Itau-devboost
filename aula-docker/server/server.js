const express = require("express");

const app = express();

app.get('/api/v1/ola', (req, res) => {
    return res.send('Oi sou um node! via NGINX');
});

app.listen(5000);