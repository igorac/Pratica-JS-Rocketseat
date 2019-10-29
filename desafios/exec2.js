const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const map = usuarios.map( item => item.idade);
// console.log(map);

// 2.2
const filter = usuarios.filter( item =>  item.empresa === 'Rocketseat' && item.idade >= 18 );
// console.log(filter);

// 2.3
const usersFind = [];
const find = usuarios.find( item => {
    if (item.empresa === "Google") {
        usersFind.push(item);
    }
});
// console.log(usersFind);


// 2.4
const calculo = usuarios
                .map( item =>  ({ ...item, idade: item.idade * 2 }) )
                .find( item => item.idade <= 50 )

console.log(calculo);                


