let pessoas = [
    {nome: 'Daniel', idade: 21},
    {nome: 'Monize', idade: 21},
    {nome: 'Silvio', idade: 56}
]


//Sem usar o filter

// let pessoasComIdadeDe21Anos = []

// for (let i = 0; i < pessoas.length; i++){
//     if (pessoas[i].idade === 21){
//         pessoasComIdadeDe21Anos.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdadeDe21Anos);

//Usando filter
// let pessoasComIdadeDe21Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 21;
// })

// console.log(pessoasComIdadeDe21Anos);

//Usando Arrow function
// let pessoasComIdadeDe21Anos = pessoas.filter((pessoa)=>{
//     return pessoa.idade === 21;
// })

// console.log(pessoasComIdadeDe21Anos);
