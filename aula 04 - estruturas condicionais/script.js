/*var jogador1 = 0;
var jogador2 = 1;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores inválidos')

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
    console.log(placar);
}
//usando else if
else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
    console.log(placar);
}
//usando else
else{
    console.log('Ninguem marcou pontos!')
}

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('ninguem ganhou!')
}*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {prop1: 'valor1', prop2: 'valor2', prop3: 'valor3'}

//for - executa uma instrução até que ela seja falsa
// for (let indice = 0; indice < array.length; indice++){
//     console.log(indice);
// }

//for/in - executa repetições a partir de uma propriedade
//com array
// for (let i in array){
//     console.log(i);//vai printar como string os indices
// }

//for/in com objeto - usamos 'i' ao invés de 'let i' porque o javascript já vai compreender que
//é uma variável de estado. Cria a variável de estado 'i' dentro do object, o for vai percorrer
//cada propriedade do objeto e imprimir elas.

// for(i in object){
//     console.log(i)
// }

//for/of - executa repetições a partir de um valor.
// for (i of array){
//     console.log(i);//vai imprimir o valor de cada indice do array
// }

//for/of - com objetos
// for(i of object.prop1){
//     console.log(i);//vai mostrar cada letra da propriedade em cada iteração do for.
// }


//while
var a = 0;
while(a < 10){
    a++;//incremento da variável
    console.log(a);
}

do {
    a++;
    console.log(a)
}while(a < 15)