/** Exercício 4 */
const filtro = document.querySelector('#filtro-da-foto');
const foto = document.querySelector('.foto-anotada > img');

filtro.addEventListener('change', () => {
    foto.style.filter = filtro.value
})

/** Desafio 1*/
document.querySelector('#imagem').addEventListener('change', e => {
    const img = document.querySelector('.foto-anotada > img'); 
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => { img.src = fileReader.result; });

    fileReader.readAsDataURL(e.target.files[0]);
});