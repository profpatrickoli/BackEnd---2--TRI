// Criação de um sistema:
//  1 - Cadastrar os produtos
//  2 - Salvar em um arquivo
//  3 - Mostrar os produtos de forma ordenada
perucas = [];
lerPerucas();


// lendo arquivo

cadastrarPeruca("Loiro", 60, "Liso", "Solto", 500.0);
cadastrarPeruca("Moreno", 40, "Liso", "Solto", 350.0);
cadastrarPeruca("Azul", 70, "Liso", "Preso", 550.0);
cadastrarPeruca("Moreno", 50, "Cacheado", "Solto", 600.0);
cadastrarPeruca("Ruivo", 60, "Ondulado", "Solto", 550.0);



const ordenadoCor = ordenar(perucas, "cor");
const ordenadoPreco = ordenar(perucas, "preco");

// MOSTRA AS PERUCAS ORDENADAS NA TELA
console.log("## PERUCAS ORDENADAS POR PRECO ##")
ordenadoPreco.forEach(peruca => {
    console.log("Peruca:" + peruca.cor
                + ", " + peruca.tamanho 
                + "cm, " + peruca.tipo
                + ", " + peruca.penteado
                + ", R$ " + peruca.preco)
});


function cadastrarPeruca(cor, tamanho, tipo, penteado, preco){
    const encontrado = encontrar(perucas, "cor", cor);
    if (typeof encontrado === "undefined"){
        const peruca = {
            cor: cor,
            tamanho: tamanho,
            tipo: tipo,
            penteado: penteado,
            preco: preco
        }
        perucas.push(peruca);

        // PERSISTINDO OS DADOS:
        const fs = require('fs');

        perucasJSON = JSON.stringify(perucas);
        fs.writeFileSync("perucas.json", perucasJSON);
        console.log("Dados foram adicionados com sucesso!");
    }
}

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

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


function lerPerucas(){
    perucas = require("./perucas.json");
}