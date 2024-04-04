let jogo1 = {
    nome: 'GTAV'
}
let jogo2 = {
    nome: 'FIFA'
}
let jogo3 = {
    nome: 'FIFA'
}


let videoGame = {
    nome: 'XBox',
    valor: 3000,
    jogos: [jogo1, jogo2]
}

videoGame.jogos.push(jogo3)

console.log(videoGame.jogos[2])


let videoGame2 = {
    nome: 'PlayStation',
    valor: 5000,
    jogos: [
        {nome: 'The Last Of'},
        {nome: 'GranTurismo'},
        {nome: 'God of War'}]
}

console.log(videoGame2.jogos[2])


let cliente = {
    nome: 'Daniel',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'ForzaMotorSport'},
            {nome: 'ForzaHorizon'},
            {nome: 'Flight Simulator'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[2].nome)

cliente.ultimoPedido.jogos.forEach(item => {
    console.log('Os jogos são: ' + item.nome)
});

for(i = 0; i < 3; i++ ){
    console.log(`O jogo ${i} é: ` + cliente.ultimoPedido.jogos[i].nome)
}