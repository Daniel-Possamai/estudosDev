// Seleciona todos os campos de input e textarea
var campos = document.querySelectorAll('input, textarea');
// Seleciona o formulário pelo ID
var form = document.getElementById('formulario');

// Função para validar os campos
function validarCampos() {
    var valido = true;
    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];
        var mensagemErro = campo.nextElementSibling; // Seleciona o span seguinte ao input
        if (!campo.value) {
            campo.style.borderColor = 'red';
            mensagemErro.style.display = 'inline';
            valido = false;
        } else {
            campo.style.borderColor = 'green';
            mensagemErro.style.display = 'none';
        }
    }
    return valido;
}

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', function(event) {
    // Impede o envio do formulário
    event.preventDefault();
    // Chama a função de validação
    var formValido = validarCampos();
    
    // Se o formulário estiver válido, permite o envio
    if (formValido) {
        form.submit();
    }
});
