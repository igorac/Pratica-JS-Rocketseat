const arr = [1,3,4,5,6];

const map = arr.map( item => item * 2 );
console.log(map);




const numbers = () => [1, 2, 3];
console.log(numbers());

const texto = () => 'text';
console.log(texto());

// Jeito de retornar um objeto com arrow function
// pois caso não utilize o () em volta do objeto
// retorna undefined
const teste = () => ({ nome: 'diego' })

console.log(teste());