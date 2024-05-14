let nomeLanches  = ["x-burguer", "x-salada", "x-calvo", "x-cebola", "x-bacon", "x-frango", "x-tudo", "x-ratazana", "x-taco"];
let precoLanches = [   10.0    ,   12.0    ,    0.0   ,    12.0   ,    15.0  ,    15.0   ,   20.0  ,     33.0    ,    15.0    ];
let ingredientes = ["pão, hamburguer", "pão, hamburguer, salada", "pão calvo, hamburguer", "pão, hamburguer, cebola", "pão, hamburguer, bacon", "pão, hamburguer, frango", "pão, hamburguer, tudo", "pão, hamburguer, ratazana", "pão, hamburguer, doritos"];
let cardapio = [nomeLanches, precoLanches, ingredientes];
//                  0               1           2

/* Aumenta os preços em 10% */
cardapio[1] = cardapio[1].map((preco)=> preco = (preco + preco*0.1));

/* Selecione os lanches com preço abaixo de R$ 15,00 */
function mostraMaisBaratos() {
    const maisBaratos = cardapio[1].filter((preco) => preco <= 15);
    console.log(maisBaratos);
    console.log("Cardápio humildade: ")
    cardapio[1].forEach((preco, i)=>{
        if (preco <= 15){
            console.log(cardapio[0][i] + 
                " - R$" + cardapio[1][i].toFixed(2) + 
                " - Ingredientes: " + cardapio[2][i]);
        }
    });
}

/* Seleciona os lanches com preço acima de R$ 20,00 */
function mostraMaisCaros(){
    const maisCaros = cardapio[1].filter((preco) => preco >= 20);
    console.log(maisCaros);
    console.log("Cardápio Chique: ")
    cardapio[1].forEach((preco, i)=>{
        if (preco >= 20){
            console.log(cardapio[0][i] + 
                " - R$" + cardapio[1][i].toFixed(2) + 
                " - Ingredientes: " + cardapio[2][i]);
        }
    });
}

/* IMPRIME O CARDÁPIO */
function mostraCardapio(){
    console.log("\n####### CARDÁPIO COMPLETO #######");
    for(i=0;i<cardapio[0].length;i++) {
        console.log(cardapio[0][i] + 
            " - R$" + cardapio[1][i].toFixed(2) + 
            " - Ingredientes: " + cardapio[2][i]);
    }
}


mostraMaisBaratos();