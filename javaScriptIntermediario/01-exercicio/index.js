let trocarCor = document.getElementById('botaoTrocaCor')
let quadrado1 = document.querySelector('.azul')

trocarCor.addEventListener('click', function(){
    quadrado1.classList.remove('azul');
    quadrado1.classList.add('amarelo');
})