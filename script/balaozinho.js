/** Exercicio 1 */
const balaozinho = document.querySelector('#balaozinho');
let marcacoes = document.querySelectorAll('.marcacao');

marcacoes.forEach(item => {

    const create_h2 = document.createElement('h2');
    const create_p = document.createElement('p');

    item.addEventListener('mouseover', (e) => {
        create_h2.innerHTML = e.currentTarget.getAttribute('data-titulo');
        create_p.innerHTML = e.currentTarget.getAttribute('data-conteudo');
        balaozinho.appendChild(create_h2).appendChild(create_p);

        balaozinho.style.color = e.currentTarget.getAttribute('data-cor');
    });

    item.addEventListener('mousemove', (e) => {
        balaozinho.style.left = `${e.pageX}px`
        balaozinho.style.top = `${e.pageY}px`
    });

    item.addEventListener('mouseout', () => {
        create_h2.remove();
        create_p.remove();
    });
});