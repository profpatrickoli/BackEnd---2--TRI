// OPERAÇÕES COM OBJETOS
// COMO ENCONTRAR UM OBJETO?
const lanches = require("./lanches.json");
//console.log(dados);

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}
const encontrado = encontrar(lanches, "nome", "x-salada");
console.log("Lanche encontrado:")
console.log(encontrado);

// COMO FILTRAR CERTOS OBJETOS?
function filtrarPorPreco(lista, preco){
    return lista.filter((lanche) => lanche.preco < preco);
}
const filtrados = filtrarPorPreco(lanches, 12);
console.log("Lanches filtrados por preço:")
console.log(filtrados);

// COMO ORDENAR OBJETOS?
function ordenar(lista, chave){
    return lista.sort((a, b) => {
        if(a[chave] < b[chave]){
            return -1;
        }
        if(a[chave] > b[chave]){
            return 1;
        }
        return 0;
    });
}
const ordenado = ordenar(lanches, "preco");
console.log("ORDENADOS:");
console.log(ordenado);



