let overlay = document.getElementById('overlay');
let tela = document.querySelector('body');

tela.addEventListener('click', () => {
    overlay.classList.toggle('openOver');
});
