const usuario = {
    nome: 'Igor',
    idade: 20,
    endereco: {
        cidade: 'Salvador',
        estado: 'BA'
    },
};

console.log(usuario);

// Sem desestruturação

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// function mostraNome(usuario) {
//     console.log(usuario.nome);
// }

// Com desestruturação
const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome, idade, cidade);


function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}
mostraNome(usuario);