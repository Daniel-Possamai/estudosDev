// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 4
//     let anoDeNascimento = 2024 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(21, 5, imprimirAnoDeNascimento)

// function dobrar(numero){
//     return numero * 2
// }

// console.log(dobrar(2)) // 4


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}


let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(3))