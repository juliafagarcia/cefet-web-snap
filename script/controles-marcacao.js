/** Exercicio 0 */
const visisbilidade = document.querySelector('#visibilidade-das-marcacoes');
let ancestral = document.querySelector('.foto-anotada');

visisbilidade.addEventListener('change', () => {
    ancestral.classList.toggle(`${visisbilidade.value}`);
});

/** Exercicio 2 */
const marcacao = document.querySelectorAll('.marcacao');

marcacao.forEach(select => {
    select.addEventListener('click', (e) => {   
        marcacao[0].classList.toggle('selecionada')
        marcacao[1].classList.toggle('selecionada')

        const iptX = document.querySelector('#x-da-marcacao');
        iptX.value = parseInt(e.currentTarget.style.left);

        const iptY = document.querySelector('#y-da-marcacao');
        iptY.value = parseInt(e.currentTarget.style.top);

        const iptWidth = document.querySelector('#largura-da-marcacao');
        iptWidth.value = parseInt(e.currentTarget.style.width);

        const iptHeight = document.querySelector('#altura-da-marcacao');
        iptHeight.value = parseInt(e.currentTarget.style.height);

        const iptTitulo = document.querySelector('#titulo-da-marcacao');
        iptTitulo.value = e.currentTarget.dataset.titulo;

        const iptConteudo = document.querySelector('#conteudo-da-marcacao');
        iptConteudo.value = e.currentTarget.dataset.conteudo;

        const iptCor = document.querySelector('#cor-da-marcacao');
        iptCor.value = e.currentTarget.dataset.cor;

        const formato = 'formato-oval';
        
        if (formato === e.currentTarget.getAttribute('data-formato')) {
            document.querySelector('input[type=radio][value=formato-oval]').checked = true

        } else {
            document.querySelector('input[type=radio][value=formato-retangular]').checked = true
        }
    });
});

/** Exercicio 3 */
const allIpts = document.querySelectorAll('input[type="number"], input[type="text"], textarea, input[type="color"],input[type="radio"]');

allIpts.forEach(input => {
    input.addEventListener('input', (e) => {
        let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');

        switch(e.currentTarget.id) {
            case 'x-da-marcacao':
                marcacaoSelecionada.style.left = `${e.currentTarget.value}px`;
                break
            case 'y-da-marcacao':
                marcacaoSelecionada.style.top = `${e.currentTarget.value}px`;
                break
            case 'largura-da-marcacao':
                marcacaoSelecionada.style.width = `${e.currentTarget.value}px`;
                break
            case 'altura-da-marcacao':
                marcacaoSelecionada.style.height = `${e.currentTarget.value}px`;
                break
            case 'titulo-da-marcacao':  
                marcacaoSelecionada.dataset.titulo = e.currentTarget.value
                break
            case 'conteudo-da-marcacao':
                marcacaoSelecionada.dataset.conteudo = e.currentTarget.value
                break 
            case 'cor-da-marcacao':
                marcacaoSelecionada.dataset.cor = e.currentTarget.value
                break
            default:
                marcacaoSelecionada.dataset.formato = e.currentTarget.value
                
                if (e.currentTarget.value === 'formato-oval') {
                    marcacaoSelecionada.classList.add('formato-oval')
                    marcacaoSelecionada.classList.remove('formato-retangular')
                } else {
                    marcacaoSelecionada.classList.add('formato-retangular')
                    marcacaoSelecionada.classList.remove('formato-oval')
                }
                break
        }
    })
})




