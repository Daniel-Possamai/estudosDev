function colocarAguaPraFerver(){
    console.log('Colocar água pra ferver')
    setTimeout(() => {
        console.log('Água ferveu!!')
        passarOCafe()
    }, 5000);
};

function prepararPraPassarOCafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarOCafe(){
    console.log('passando o café')
}

colocarAguaPraFerver();
prepararPraPassarOCafe();