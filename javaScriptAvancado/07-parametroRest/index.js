function incentivarQuester(mensagem, ...nomeQuesters){
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
};

incentivarQuester('Parabens por ter chego ao JS avançado,', 'Possamai', 'Monize', 'Silvio');
