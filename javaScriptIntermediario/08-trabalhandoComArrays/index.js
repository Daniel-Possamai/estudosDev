let frutas = ['banana', 'maça', 'laranja', 'pera']



// for(let i = 0; i < frutas.length; i++){
//     console.log('Frutas: ' + frutas[i])
// }

// frutas.forEach(function(item, indice, array){
//     console.log('Frutas: ' + item)
//     // console.log('Frutas: ' + frutas[indice])
// })

// frutas.forEach(function(item){  //iterar sobre o elemento mostrando os items
//     console.log('Frutas: ' + item)
// })

frutas.push('manga') //Adiciona item no final do array

console.log(frutas)

frutas.pop() //Remove item do final do array

console.log(frutas)

frutas.shift() //Remove item do inicio do array

console.log(frutas)

frutas.unshift('jabuticaba') //Adiciona um item no inicio do array

console.log(frutas)

let posicaoMaca = frutas.indexOf('maça') //Procurar a posição no array
console.log(posicaoMaca)
