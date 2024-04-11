let selectDeEstado = document.querySelector("select[name='estado']")

selectDeEstado.addEventListener('change', function (event){
    console.log(event.target.value)
    alert('Mudou o select')
})

//o codigo acima também pode ser feito sem usar uma variavel

// document.querySelector("select[name='estado']").addEventListener(('change', function (){
//     alert('Mudou o select')
// }))