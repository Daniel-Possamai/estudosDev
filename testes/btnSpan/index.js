const btn = document.getElementById('btn');
let span = document.getElementById('meuSpan');

btn.addEventListener('click', ()=>{
    span.style.display = span.style.display === 'inline-block' ? 'none' : 'inline-block';
})