function criar() {
    let a = [1,2,3];
    return a;
}

let numeros = criar()

let [a,b,c] =  numeros;

console.log(a,b,c);



/*
let [nome, sobrenome] = ['Joao', 'Bernardino']

console.log(nome, sobrenome)
*/

/*
// Pulando alguns itens
let info = [ 'Joao Bernardino', 'Joao', 'Bernardino', '@jocaio'];
let [ nomeCompleto, ,, instagram ] = info;

console.log(nomeCompleto, instagram)
*/

/*
let info = [ 'Joao Bernardino', 'Joao', 'Bernardino', '@jocaio'];
let [ nomeCompleto, nome, sobrenome, instagram ] = info;

console.log(nomeCompleto, nome, sobrenome, instagram)
*/