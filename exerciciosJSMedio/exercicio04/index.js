
let inputs = document.querySelectorAll("input[type='text']");

inputs.forEach(input => {
    input.addEventListener('change', () => {
        let inputVazio = input.value;
        if(inputVazio.trim() === ''){
            input.classList.remove('border');
        }else{
            input.classList.add('border');
        }
    });
});