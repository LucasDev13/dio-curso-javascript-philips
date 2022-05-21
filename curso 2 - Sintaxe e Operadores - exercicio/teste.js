let contador = 0;
console.log(contador++);


var x = 20;
console.log('iniciando...\n');

while(x != 1){
    console.log(x + ' > ');
    if(x % 2 == 0){
        x = x /2;
    }else{
        x = ((3*x) +1);
    }
}
console.log(x)