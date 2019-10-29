const arr = [1,3,4,5,8,9];

// map - Percorre um array/objeto
// 1° - Elemento do array
// 2° - Índice do array
// 3° - Array Original
// 4° - this Argum - Opcional
const newArr = arr.map(function(item, index, arrOrigin){
  
    return item + index;

    // return item;
    // return index;
    // return arrOrigin;

});

// console.log(newArr);


// reduce - É transformar os de um array/objeto em um único valor.
// Ao passar um segundo parâmetro ao reduce, que nesse caso seria
// o valor inicial, o acumulador que é o primeiro parâmetro da
// callback, passará a receber o valor inicial, e o next
// passará a receber o primeiro valor do array.
const sum = arr.reduce(function(total, next, index, arrOrigin){

    return total + next;

    // return total;
    // return next;
    // return index;
    // return arrOrigin;
})

// console.log(sum);



// filter - É utilizado quando quer retornar um novo array
// com base em uma condição.
// 1° - Elemento do array
// 2° - Índice do array
// 3° - Array na qual foi chamado
// 4° - this Argum - Opcional
const filter = arr.filter(function(item, index, array){
    
    return item % 2 === 0;

    // return item;
    // return index;
    // return array;
})

// console.log(filter);


// find - É utilizado quando quer buscar um valor em um array/objeto
// com base em uma condição.
// 1° - Elemento do array
// 2° - Índice do array
// 3° - Array na qual foi chamado
// 4° - this Argum - Opcional
const find = arr.find(function(item, index, array){

    return arr.indexOf(item) === 0;

    // return item;
    // return index;
    // return array;
});

console.log(find);

// findIndex - Retorna o index do elemento
const findIndex = arr.findIndex(function(item){
    // return item === 1;

    // return item;
});

console.log(findIndex);
