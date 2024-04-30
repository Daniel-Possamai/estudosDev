const pessoas = ['Daniel', 'Monize', 'Silvio'];
console.log(...pessoas);

//Concatenar dois arrays

let pessoas1 = ['Dean', 'Castiel', 'Luna'];
let pessoas2 = ['Deise', 'Derci', 'Alan'];

// pessoas1 = pessoas1.concat(pessoas2);

pessoas1 = [...pessoas1, ...pessoas2];

console.log(pessoas1)


//Clonar objeto

const pessoa3 = { nome: 'Possamai', idade: 21};

const objetoClonado = {...pessoa3}


