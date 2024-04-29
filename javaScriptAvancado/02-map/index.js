let pessoas = [
    { nome: 'Daniel', idade: 21},
    { nome: 'Monize', idade: 21},
    { nome: 'Silvio', idade: 56}
];

// let nomeDasPessoas = [];

// for (let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// };

// console.log(nomeDasPessoas);

// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return "O nome é: " + pessoa.nome + " e tem " + pessoa.idade + " anos";
// });

// console.log(nomeDasPessoas);

//usando arrow Function

let nomeDasPessoas = pessoas.map((pessoa)=> "O nome é " + pessoa.nome + " e tem " + pessoa.idade + " anos de idade");

console.log(nomeDasPessoas);

