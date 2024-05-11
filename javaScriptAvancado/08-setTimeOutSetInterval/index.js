
//setTimout executa uma vez após o intervalo de tempo
// setTimeout(() => {
//     alert('Olá mundo!')
// }, 3000);

//setInterval executa toda vez q o tempo determinado passar

// setInterval(() => {
//     console.log('executando a cada 3s')
// }, 3000);

//parar o setInterval
let idDoIntervalo = setInterval(() => {
                    console.log('A cada 2 segundos')
                    }, 2000);

console.log(idDoIntervalo);

clearInterval(idDoIntervalo);