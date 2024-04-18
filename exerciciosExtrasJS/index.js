// Exercício 3.1: Escreva um programa que imprima todos os números de 1 a 100.

// let numero = 1;

// for (let i = 0; i < 100; i++){
//     console.log(numero)
//     numero++
// };

// Exercício 3.2: Escreva uma função que aceite dois números como argumentos e retorne sua soma.

// let numero1 = prompt("Digite um número: ");
// let numero2 = prompt("Digite outro número: ");

// function somar(n1, n2){
//     return parseInt(n1) + parseInt(n2);
// }

// console.log(somar(numero1, numero2));

// Exercício final: Calculadora de IMC (Índice de Massa Corporal)

let btnSomar = document.getElementById('btnCalcular');
let alturas = document.getElementById('altura');
let pesos = document.getElementById('peso');


function calularImc(altura, peso){
    let valorAltura = parseFloat(altura.value);
    let valorPeso = parseFloat(peso.value);
    let imc = valorPeso / (valorAltura * valorAltura);
    console.log("Imc é: " + imc);
    return imc;
}

btnSomar.addEventListener('click', function(){
    calularImc(alturas, pesos);
});

