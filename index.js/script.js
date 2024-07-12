
alert('Bem vindo, Emilly')
// Função para alterar o conteúdo do elemento com ID 'content'
function alterarConteudo() {
    // Seleciona o elemento com o id 'content'
    var elemento = document.getElementById('content');
    
    // Altera o conteúdo HTML do elemento para incluir "Te amo" e corações animados
    elemento.innerHTML = `
        <div>
            <span> Eu te amo </span>
            <span class="heart">❤️</span>
            <span class="heart">❤️</span>
            <span class="heart">❤️</span>
        </div>
    `;
}
