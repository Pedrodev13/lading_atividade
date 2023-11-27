document.addEventListener('DOMContentLoaded', function() {
    const inicio = document.querySelector('.header ');
    const alturaIncio = inicio.clientHeight;


    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual > alturaIncio){
            ocultaHeader();
        } else {
            exibeHeader();
        }
    });


    function ocultaHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }
})
