import express from 'express';


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota de exemplo
app.get('/', (res) => {
    res.send('Olá, mundo!');
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});
