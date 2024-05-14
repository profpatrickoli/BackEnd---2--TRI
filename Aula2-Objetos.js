function criaLanche(nome, preco, ingredientes){
    const lanche = {
        nome: nome,
        preco: preco,
        ingredientes: ingredientes
    }
    return lanche;
}

lanches = [];
lanches.push(criaLanche("x-burguer", 10.0, ["pão", "hamburguer", "queijo"]));
lanches.push(criaLanche("x-salada", 12.0, ["pão", "hamburguer", "queijo", "salada"]));
lanches.push(criaLanche("x-ratazana", 30.0, ["pão", "hamburguer", "queijo", "ratazana"]));
console.log(lanches);

/* Para essa aula:
1 - Criar uma função para alterar o preço do lanche.
2 - Criar uma função para alterar os ingredientes do lanche.
3 - Criar uma função para mostrar o lanche.
*/
function alteraPreco(lanche, novoPreco) {
    lanche.preco = novoPreco;
}
alteraPreco(lanches[0], 20.0);
console.log(lanches[0]);
