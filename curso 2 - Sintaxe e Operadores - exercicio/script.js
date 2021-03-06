function comparaNumeros(n1, n2){
    if(!n1 || !n2) return "Defina dois numeros."
    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundaFrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(n1, n2){

    let saoIguais = '';//cria a variável vazia

    if(n1 !== n2){
        saoIguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`;

}

function criaSegundaFrase(n1, n2){
   const soma = n1 + n2;
   
   let resultado10 = 'menor';
   let resultado20 = 'menor';

   const comparar10 = soma > 10;
   const comparar20 = soma > 20;

    if(comparar10){
       resultado10 = 'maior';
    }

    if(comparar20){
       resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(1,1));