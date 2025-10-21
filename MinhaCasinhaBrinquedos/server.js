// server.js - NOSSA CASA PRINCIPAL!
//mongodb+srv://brinquedos:senha123@brinquedos-app.xor9ngy.mongodb.net/ CONEXÃO DO BANCO COM O MONGODB
// 1. Chamamos todos os amigos que vamos precisar
const express = require('express');
const mongoose = require('mongoose');

// 2. Criamos nossa casa (servidor)
const app = express();
const PORT = 3000;

// 3. Falamos para nossa casa entender JSON
app.use(express.json());

// 🏠 PASSO IMPORTANTE: Ligar para a SUA Casinha MongoDB
async function conectarBanco() {
    try {
        // 🔗 COLA AQUI SUA STRING DE CONEXÃO!
        await mongoose.connect('mongodb+srv://brinquedos:senha123@brinquedos-app.xor9ngy.mongodb.net/brinquedos-app');
        console.log('🎉 Conectamos na SUA casinha MongoDB!');
    } catch (erro) {
        console.log('😢 Não consegui conectar:', erro.message);
    }
}

// Ligamos para a casinha!
conectarBanco();

// 🎪 Colocamos nossas regras de brincadeira
app.use('/brinquedos', require('./routes/brinquedos'));

// 🏠 Porta da nossa casa - onde as pessoas batem
app.listen(PORT, () => {
    console.log('=================================');
    console.log('🚀 CASINHA DE BRINQUEDOS ABERTA!');
    console.log(`📞 Telefone: http://localhost:${PORT}`);
    console.log('=================================');
});