function adicionarComentario(){
    let inputComentario = document.getElementsByName('novoComentario')
    
    let textoDigitado = inputComentario[0].value;
    
    let novosComentarios = document.getElementById('novosComentarios')

    novosComentarios.innerHTML += `<p>Novo Comentario: ${textoDigitado}</p>`
}