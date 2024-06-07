
const btn = document.getElementById('btn')

async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

//Sempre que for uma promisse necessita colocar o await na frente


async function tirarUmaCarta(deckId){
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function selecionar(){
    const baralho = await criarBaralhoEmbaralhado()
    const tirarCarta = await tirarUmaCarta(baralho.deck_id)
    const imgCarta = tirarCarta.cards[0].image
    document.getElementById('carta').src = imgCarta
}

selecionar()
btn.addEventListener('click', () => {
    selecionar()
})
