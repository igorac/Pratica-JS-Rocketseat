// REST - Pega o resto das propriedades

const usuario = {
    nome: 'Igor',
    idade: 20,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;
console.log(nome,resto);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a, b, c);

// function soma(a, b, c)
// function soma(...params) {
    // return params.reduce( (total, next) => total + next );
// }
function soma(a, b, ...params) {
    return params;
}
console.log(soma(1, 3, 4, 6, 7));


// SPREAD - Faz a propagação de uma estrutura para outra

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2]; // arr3 = [1, 2, 3,    4, 5, 6]
console.log(arr3);

const usuario1 = {
    nome: 'Igor',
    idade: 20,
    empresa: 'Rocketseat',
}


// Herda as propriedades do usuario1 e caso passe uma chave que já existe
// ela servirá como uma modificação. 

// Ex.: usuario1.empresa: Rocketseat  =  usuario2.empresa: No Have
const usuario2 = { ...usuario1, empresa: 'No Have'}; 
console.log(usuario2);





