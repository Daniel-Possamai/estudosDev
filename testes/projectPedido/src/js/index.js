let divContainter = document.querySelector('.container');
let imgsSushi = divContainter.querySelectorAll('img');
let btnSim = document.getElementById('btnSim');
let btnNao = document.getElementById('btnNao');
let textoDoSim = document.getElementById('sushizada');

btnNao.addEventListener('mouseover', ()=>{
    var newPosY = Math.floor(Math.random() * 500);
    var newPosX = Math.floor(Math.random() * 500);
    btnNao.style.position = 'absolute';
    btnNao.style.left = newPosX + 'px'; 
    btnNao.style.top = newPosY + 'px'; 
})


btnSim.addEventListener('click', ()=>{
    imgsSushi.forEach(img => {
        img.style.display = 'block';
    });
    btnNao.style.position = '';
    textoDoSim.style.display = 'block';
});