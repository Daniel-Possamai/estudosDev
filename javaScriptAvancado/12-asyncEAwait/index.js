let numero = 5;

let somador = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero > 4){
            console.log("Numero maior que 4! Prosseguindo...");
            resolve(true);
        }else{
            console.log("Numero menor que 4 não vair para frente")
            reject(false);
        }
    })
}

const somou = () => console.log("Prosseguiu e somou");

async function iniciarSomatoria(){
    const somatoria = await somador(numero);
    const somado = somou(somatoria)
    console.log(somatoria);
    if (somatoria) {
        console.log("Finalizada a função toda!")
    }
}

iniciarSomatoria();