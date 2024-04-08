// console.log(document)

let p = document.getElementById('paragrafo1')

console.log(p)

let inputsPorClasse = document.getElementsByClassName('tagDeInput')

console.log(inputsPorClasse)

console.log(inputsPorClasse[1])


let inputPorTag = document.getElementsByTagName('input')

console.log(inputPorTag)

// Buscar por atributo aqui no exemplo está buscando pelo atributo name

let inputPorName = document.querySelectorAll("input[name='email']")

console.log(inputPorName)