let usuario = {
    nome: 'Daniel',
    excluir: function () {
        console.log('O usuario, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir()