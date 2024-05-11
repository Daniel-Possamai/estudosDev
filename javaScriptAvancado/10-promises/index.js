/*
    Estados das promisses:
    Pendente
    Realizada Resolve
    Recusada Reject
    Estabelicida
*/

// new Promise((resolve, reject)=>{
    
// })


let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject)=> {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de fervura")
            resolve()
        }else{
            console.log('É necessario ligar o fogao e colocar a chaleira no fogao para ferver a agua')
            reject()
        }
    

    })
}


let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);

console.log('fazendo café');