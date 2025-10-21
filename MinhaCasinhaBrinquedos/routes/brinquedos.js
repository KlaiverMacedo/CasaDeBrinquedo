// routes/brinquedos.js

// 1. Chamamos os amigos que vamos precisar
const express = require('express');
const Brinquedo = require('../models/Brinquedo'); // Nossa caixa!

const router = express.Router();

// 🎯 REGRA 1: "Como GUARDAR brinquedo novo"
router.post('/', async (req, res) => {
    try {
        // Pegamos o brinquedo que querem guardar
        const brinquedoNovo = new Brinquedo({
            nome: req.body.nome,
            cor: req.body.cor,
            preco: req.body.preco
        });
        
        // 🎯 Guardamos na casinha MongoDB
        await brinquedoNovo.save();
        
        // Comemoramos! 🎉
        res.json({
            sucesso: true,
            mensagem: "🎉 Brinquedo guardado na casinha!",
            brinquedo: brinquedoNovo
        });
        
    } catch (erro) {
        res.json({
            sucesso: false,
            mensagem: "Não consegui guardar o brinquedo",
            erro: erro.message
        });
    }
});

// 🎯 REGRA 2: "Como VER todos os brinquedos"
router.get('/', async (req, res) => {
    try {
        // 🎯 Pegamos TODOS os brinquedos da casinha
        const todosBrinquedos = await Brinquedo.find();
        
        res.json({
            sucesso: true,
            mensagem: `Aqui estão seus ${todosBrinquedos.length} brinquedos!`,
            brinquedos: todosBrinquedos
        });
        
    } catch (erro) {
        res.json({
            sucesso: false,
            mensagem: "Não consegui pegar os brinquedos"
        });
    }
});

// 🎯 REGRA 3: "Como CONTAR os brinquedos"
router.get('/contagem', async (req, res) => {
    try {
        // 🎯 Contamos quantos brinquedos temos
        const total = await Brinquedo.countDocuments();
        
        res.json({
            sucesso: true,
            mensagem: `🎊 Temos ${total} brinquedos na casinha!`,
            total: total
        });
        
    } catch (erro) {
        res.json({
            sucesso: false,
            mensagem: "Não consegui contar os brinquedos"
        });
    }
});

// 2. Falamos: "Outros podem usar nossas regras"
module.exports = router;