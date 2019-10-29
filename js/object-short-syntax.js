const nome = "Igor";
const idade = 20;


// Sem sintaxe curta de objeto
const usuario = {
    nome: nome,
    idade: idade,
    empresa: "Rocketseat"
}
console.log(usuario);


// Com sintaxe curta de objeto
// Quando o nome da chave é o mesmo nome do valor
// que nem é o caso do nome: nome e idade: idade
// no ES6 basta colocar o valor da chave.
const usuario1 = {
    nome,
    idade,
    empresa: "Rocketseat"
}
console.log(usuario1);