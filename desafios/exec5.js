// 5.1.1 - Rest
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
// console.log(x, y);


// 5.1.2 - Rest
function soma(...params) {
    return params.reduce( (total, next) => total+next )  
}
// console.log(soma(1,3,4));





// 5.2 - Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
console.log(usuario2);

const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras'} }
console.log(usuario3);