const listaDePersonagens = document.querySelectorAll('.personagens')

listaDePersonagens.forEach((personagens) => {
    personagens.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagens.classList.add('selecionado')

        const imagemPersonagem = document.querySelector('#personagemGrande')

        const idPersonagem = personagens.attributes.id.value
        imagemPersonagem.src = `./src/imagens/${idPersonagem}.png`

        const nomePersonagem = document.getElementById('nomePersonagem')
        nomePersonagem.innerText = personagens.getAttribute('data-name')

        const descricaoPersonagem = document.getElementById('descricao')
        descricaoPersonagem.innerText = personagens.getAttribute('data-description')
    })    
});
