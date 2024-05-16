let numero = 5;

let somador = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero > 4){
            console.log("Numero maior que 4! Prosseguindo...");
            resolve();
        }else{
            console.log("Numero menor que 4 não vair para frente")
            reject();
        }
    })
}

const somou = () => console.log("Prosseguiu e somou");

somador(numero)
    .then(somou);