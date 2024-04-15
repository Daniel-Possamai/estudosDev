let quadrado = document.querySelector('.quadrado')


quadrado.addEventListener('click', () =>{
    let corAzulExiste = quadrado.classList.contains('azul');

    if(corAzulExiste){
        quadrado.classList.remove('azul');
    }else{
        quadrado.classList.add('azul');
    }
})

