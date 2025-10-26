// models/Brinquedo.js

// 1. Chamamos o ajudante Mongoose
const mongoose = require('mongoose');

// 2. Fazemos uma CAIXA para organizar brinquedos
const brinquedoSchema = new mongoose.Schema({
    nome: {
        type: String,           // Só coloca texto
        required: true,         // OBRIGATÓRIO ter nome!
    },
    cor: {
        type: String,
        required: true
    },
    preco: {
        type: Number,           // Só números
        required: true
    },
    ehNovo: {
        type: Boolean,          // true ou false
        default: true           // Se não disser, é true
    }
});

// 3. Falamos: "Esta é a Caixa de Brinquedos"
const Brinquedo = mongoose.model('Brinquedo', brinquedoSchema);

// 4. Falamos: "Outros podem usar esta caixa"
module.exports = Brinquedo;