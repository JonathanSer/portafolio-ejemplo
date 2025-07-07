//
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

//
const resumenBtns = document.querySelectorAll('.resumen-btn');

resumenBtns.forEach((btn, idx) => {
    btn.addEventListener('click',  () => {
        const resumenDetalles = document.querySelectorAll('.resumen-detalle');

        resumenBtns.forEach(btn => {
            btn.classList.remove('activo');
        });
        btn.classList.add('activo');
        
        resumenDetalles.forEach(detalle => {
            detalle.classList.remove('activo');
        });
        resumenDetalles[idx].classList.add('activo');
    });
});

//
const flechaDerecha = document.querySelector('.portafolio-box .navegacion .flecha-derecha');
const flechaIzquierda = document.querySelector('.portafolio-box .navegacion .flecha-izquierda');

let indice = 0;

const activarPortafolio = () => {
    const imgSlide = document.querySelector('.portafolio-carusel .imagen-slice');
    const portafolioDetalles = document.querySelectorAll('.portafolio-detalles')

    if (!imgSlide) {
        console.error('No se encontró .imagen-slice en el DOM');
        return;
    }

    imgSlide.style.transform = `translateX(calc(${indice * -100}% - ${indice * 2}rem))`;

    portafolioDetalles.forEach(detalles => {
        detalles.classList.remove('activo');
    })

    portafolioDetalles[indice].classList.add('activo')
};

flechaDerecha.addEventListener('click', () => {
    if (indice < 1) {
        indice++;
        flechaIzquierda.classList.remove('desactivado');
    } else {
        indice = 2;
        flechaDerecha.classList.add('desactivado');
    }

    activarPortafolio();
});

flechaIzquierda.addEventListener('click', () => {
    if (indice > 1) {
        indice--;
        flechaDerecha.classList.remove('desactivado');
    } else {
        indice = 0;
        flechaIzquierda.classList.add('desactivado');
    }

    activarPortafolio();
});
