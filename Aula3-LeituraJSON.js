const dados = require("./lanches.json");

//console.log(dados);
//console.log(typeof dados);

const textoJSON = JSON.stringify(dados);
//console.log(textoJSON);
//console.log(typeof textoJSON);

const objetoJSON = JSON.parse(textoJSON);
//console.log(typeof objetoJSON)

console.log(objetoJSON[0].nome);

// Para hoje:
// Copiar as funções do arquivo da Aula2 neste arquivo
// Testar se as funções funcionam corretamente
// e corrigir caso necessário.

