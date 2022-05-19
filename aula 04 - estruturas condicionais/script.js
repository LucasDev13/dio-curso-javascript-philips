var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores inválidos')

if(jogador1 != -1){
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
}else if(jogador2 > 0){
    console.log('Jogador 2 marcou ponto!');
}else{
    console.log('Ninguem marcou pontos!')
}
}