// Criação de um sistema:
//  1 - Cadastrar os produtos
//  2 - Salvar em um arquivo
//  3 - Mostrar os produtos de forma ordenada

perucas = [];

function cadastrarPeruca(cor, tamanho, tipo, penteado, preco){
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

cadastrarPeruca("Loiro", 60, "Liso", "Solto", 500.0);
