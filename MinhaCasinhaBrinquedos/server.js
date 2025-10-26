// server.js - NOSSA CASA PRINCIPAL ATUALIZADA!
// CONEXÃO COM SEU IP: 200.186.73.66

// 1. Chamamos todos os amigos que vamos precisar
const express = require("express");
const mongoose = require("mongoose");

// 2. Criamos nossa casa (servidor)
const app = express();
const PORT = 3000;

// 3. Falamos para nossa casa entender JSON
app.use(express.json());

//CONEXÃO MELHORADA COM SEU IP
async function conectarBanco() {
  try {
    console.log("Tentando conectar ao MongoDB...");
    console.log("Usando IP: 200.186.73.66");

    //STRING DE CONEXÃO ATUALIZADA
    await mongoose.connect(
      "mongodb+srv://brinquedos:senha123@brinquedos-app.xor9ngy.mongodb.net/brinquedos-app?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout de 5 segundos
        socketTimeoutMS: 45000, // Timeout de socket
      }
    );

    console.log("CONECTADO na SUA casinha MongoDB!");
    console.log("IP 200.186.73.66 autorizado!");

    //TESTE: Verificamos se consegue acessar os dados
    console.log("Testando acesso ao banco...");
    const Brinquedo = require("./models/Brinquedo");
    const totalBrinquedos = await Brinquedo.countDocuments();
    console.log(`Banco funcionando! Temos ${totalBrinquedos} brinquedos.`);
  } catch (erro) {
    console.log("ERRO na conexão MongoDB:");
    console.log("Detalhe do erro:", erro.message);

    //Dicas específicas baseadas no erro
    if (erro.message.includes("auth failed")) {
      console.log("Dica: Verifique se o usuário e senha estão corretos");
    } else if (
      erro.message.includes("whitelist") ||
      erro.message.includes("IP")
    ) {
      console.log(
        "Dica: IP 200.186.73.66 precisa ser autorizado no MongoDB Atlas"
      );
      console.log("Acesse: Network Access → Add IP Address → 200.186.73.66/32");
    } else if (erro.message.includes("timed out")) {
      console.log("Dica: Aguarde 2-3 minutos após adicionar o IP");
    }
  }
}

//Colocamos nossas regras de brincadeira
app.use("/brinquedos", require("./routes/brinquedos"));

// Porta da nossa casa - onde as pessoas batem
app.listen(PORT, async () => {
  console.log("CASINHA DE BRINQUEDOS ABERTA!");
  console.log(`Telefone: http://localhost:${PORT}`);
  console.log("IP Autorizado: 200.186.73.66");

  //Conectamos ao banco DEPOIS que o servidor inicia
  await conectarBanco();
});

//Mensagem de ajuda
console.log("\nLEMBRETE:");
console.log('1. No MongoDB Atlas, vá em "Network Access"');
console.log('2. Clique "Add IP Address"');
console.log("3. Adicione: 200.186.73.66/32");
console.log('4. Aguarde 2-3 minutos até ficar "Active"');
console.log("5. Teste novamente!\n");
