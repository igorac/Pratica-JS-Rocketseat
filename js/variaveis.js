function teste(x) {

    if (x > 5) {
        let y = 4;
    }
    
    console.log(x, y); // Com o ( let, const ) o Y não funciona fora do escopo if, mas com o ( var ) funciona
}

teste(10);


// --------------------------------------------
// const usuario = { nome: "igor" };
// usuario.nome = "Diego"; // Funciona
// console.log(usuario.nome);

// usuario = usuarios; // Não Funciona