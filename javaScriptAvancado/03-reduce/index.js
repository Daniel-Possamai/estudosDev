let ordens = [
    { cliente: 'Daniel', tipo: 'compra', quantidade: 23, ativo: 'MKDL22'},
    { cliente: 'Monize', tipo: 'compra', quantidade: 41, ativo: 'AAOP54'},
    { cliente: 'Silvio', tipo: 'venda', quantidade: 89, ativo: 'RTMC83'}
]

    // let quantidadeDeOrdens = 0;

// for (let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade;
// };

// console.log(quantidadeDeOrdens);

//utilizando o Reduce
// let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
//     return somaDasOrdens + ordem.quantidade;
// }, 0)

// console.log(quantidadeDeOrdens);

//reduce utilizando arrow fuction

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem)=> somaDasOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens);