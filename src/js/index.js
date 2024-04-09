/*os projetos sem a classe ativo são os que estão escondidos e irão aparecer somente quando clicar em mostrar mais, para isso quando clicar vai ser adicionada uma classe ativo neles tambem*/ 

const botaoMostrarMais = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarMais.addEventListener('click', () => {
    mostrarMais();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarMais.classList.add('remover');
}

function mostrarMais() {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });
}
