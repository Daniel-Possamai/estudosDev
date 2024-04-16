var campos = document.querySelectorAll('input, textarea');
var valido = true;

document.getElementById('formulario').onsubmit = function() {
    console.log("Evento de submissão");

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];
        if (!campo.value) {
            campo.style.borderColor = 'red';
            valido = false;
        } else {
            campo.style.borderColor = 'green';
        }
        
    }

    

    return valido; // Se for false, impede o envio do formulário
};