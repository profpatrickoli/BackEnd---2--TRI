// LEITURA DO ARQUIVO JSON:
const dados = require("./lanches.json");

const fs = require('fs');

dados[2].preco = 30;
console.log("Preço alterado")

dadosJSON = JSON.stringify(dados);
fs.writeFileSync("lanches.json", dadosJSON);
console.log("Dados foram alterads com sucesso!");