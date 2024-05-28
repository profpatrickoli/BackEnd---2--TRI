// OPERAÇÕES COM OBJETOS
// COMO ENCONTRAR UM OBJETO?
const dados = require("./lanches.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(dados, "nome", "x-salada");

console.log(encontrado);
