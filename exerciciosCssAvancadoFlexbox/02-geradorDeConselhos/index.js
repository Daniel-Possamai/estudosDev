let idConselho = document.getElementById('idConselho')
let conselho = document.getElementById('conselho')
let btnGerar = document.getElementById('gerar')

async function consultandoConselho(){

    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}


async function test(){
    const conselhoG = await consultandoConselho()
    const tt = `ID: ${conselhoG.slip.id} Conselho: ${conselhoG.slip.advice}`
    console.log(tt)
    
}

test()



// async function gerarConselho(){
//     try{
//         const result = await Promise.all([
        
            
//         ])
        
//     } catch(error){
//         console.log(error)
//     }
// }


