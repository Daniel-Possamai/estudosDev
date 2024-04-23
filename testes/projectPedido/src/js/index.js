let divContainter = document.querySelector('.container');
let imgsSushi = divContainter.querySelectorAll('img');
let btnSim = document.getElementById('btnSim');
let btnNao = document.getElementById('btnNao');

btnSim.addEventListener('click', ()=>{
    imgsSushi.forEach(img => {
        img.style.display = 'block';
    });
});