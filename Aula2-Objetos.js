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


/* Para essa aula:
1 - Criar uma função para alterar o preço do lanche.
2 - Criar uma função para alterar os ingredientes do lanche.
3 - Criar uma função para mostrar todos os lanche.
*/
function alteraPreco(lanche, novoPreco) {
    lanche.preco = novoPreco;
    console.log("Preço alterado para " + lanche.preco);
}
alteraPreco(lanches[0], 20.0);

function removeIngrediente(lanche){
    lanche.ingredientes.pop();
    console.log("Novos ingredientes: " + lanche.ingredientes);
}
removeIngrediente(lanches[0]); 

function adicionaIngrediente(lanche, ingrediente){
    lanche.ingredientes.push(ingrediente);
    console.log("Novos ingredientes: " + lanche.ingredientes);
}
adicionaIngrediente(lanches[0], "Hamburguer artesanal");
  
function mostraLanches(){
    lanches.forEach((lanche) => {
        console.log(lanche.nome + " - R$ " + lanche.preco + " - " + lanche.ingredientes);
    });
}
mostraLanches();
