/********** Trabalhando com arrays **********/
//o que são vetores ou arrays.

//Como declarar um array
/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar vários tipos de dados de diferentes tipos
let array1 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array1);

//pegando um único indice
/*let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log('array 2 -> ' + array2[0]);//pega o indice zero.*/

/*array1.forEach(function(item, index){console.log(item, index)});*/

/*array1.push('novo item');
console.log(array1);*/

/*array1.pop();
console.log(array1);*/

/*array1.shift();
console.log(array1);*/

/*array1.unshift('novo item no inicio');
console.log(array1);*/

//console.log(array1.indexOf(true));

/*array1.splice(0, 3);
console.log(array1);*/

/*let novoArray = array1.slice(0, 3);
console.log(novoArray);*/

/********** Trabalhando com objetos **********/

let object = {string: 'string', number: 1, boolean: true, array: ["array1", "array2"], objectInterno: 
{objectInterno: 'objeto interno'}};

// console.log(object.number)
// console.log(object.objectInterno)
// console.log(object.array)

// var string = object.string;
// console.log(string);

//primeira forma de desestruturação - passar um valor do atributo do objeto para a variável.
var arrayInterno = object.array;
console.log(arrayInterno);

//segunda forma de desestruturação - a partir de chaves no momento da declarão.
var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);