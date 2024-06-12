let idConselho = document.getElementById('idConselho')
let conselhoTxt = document.getElementById('conselho')
let btnGerar = document.getElementById('gerar')

async function consultandoConselho(){

    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}


async function conselhoGerado(){
    const conselho = await consultandoConselho()
    const tt = `ID: ${conselho.slip.id} Conselho: ${conselho.slip.advice}`
    console.log(tt)

    idConselho.innerText = conselho.slip.id
    conselhoTxt.innerText = conselho.slip.advice


}

btnGerar.addEventListener('click', async () =>{
    try{
        const result = await Promise.all([
        consultandoConselho(),
        conselhoGerado()
    ])
    console.log(result)
    } catch (error){
        console.log(error)
    }
})

