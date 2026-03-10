document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-proyecto');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDesc = document.getElementById('modal-descripcion');
    const btnCerrar = document.querySelector('.cerrar-modal');
    const proyectos = document.querySelectorAll('.contenedor-proyectos');

    proyectos.forEach(proyecto => {
        proyecto.addEventListener('click', () => {
            const titulo = proyecto.querySelector('h4').innerText;
            const descripcion = proyecto.querySelector('p:not(.opaco)').innerText;
            const imagenSrc = proyecto.querySelector('.foto-proy').src;
            modalTitulo.innerText = titulo;
            modalDesc.innerText = descripcion;
            modalImg.src = imagenSrc;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelectorAll('.logo-tecno img').forEach(logo => {
        logo.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    btnCerrar.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});


