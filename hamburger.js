const hamburger = document.getElementById('hamburger');
const navegacion = document.getElementById('navegacion');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('abierto');
    navegacion.classList.toggle('abierto');
});

navegacion.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('abierto');
        navegacion.classList.remove('abierto');
    });
});