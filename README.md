# Portafolio de Evidencias

Este proyecto es una página web de portafolio desarrollada en HTML, CSS y JavaScript. Está diseñada para presentar tu experiencia, habilidades, proyectos y contacto de forma profesional e interactiva.

## 📄 Descripción del Proyecto

### ✨ Estructura General

Este portafolio cuenta con un diseño responsivo y moderno que incluye animaciones, secciones dinámicas y una navegación fluida.

### 🧭 Secciones del sitio:

- **Inicio**: Presentación breve del desarrollador con un mensaje de bienvenida y redes sociales.
- **Sobre mí**: Descripción personal, experiencia y enfoque profesional.
- **Resumen**: Menú interactivo que muestra tres sub-secciones:
  - *Experiencia laboral*
  - *Educación*
  - *Habilidades técnicas*
- **Portafolio**: Carrusel de proyectos con detalles, tecnologías y enlaces al repositorio y demo.
- **Contacto**: Formulario funcional con validación visual para enviar mensajes.

### 🧩 Plantillas y tecnologías

- **Plantilla personalizada** hecha desde cero.
- Estilos desarrollados con **CSS puro** usando variables (`:root`).
- Iconos de **Boxicons** y tipografía **Poppins** de Google Fonts.

## 💻 Código de ejemplo

```html
<nav class="navbar">
  <a href="#inicio" class="activo">Inicio</a>
  <a href="#sobre-mi">Sobre mí</a>
  <a href="#resumen">Resumen</a>
  <a href="#portafolio">Portafolio</a>
  <a href="#contacto">Contacto</a>
</nav>
```
```js
const resumenBtns = document.querySelectorAll('.resumen-btn');
resumenBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumenDetalles = document.querySelectorAll('.resumen-detalle');
    resumenBtns.forEach(btn => btn.classList.remove('activo'));
    resumenDetalles.forEach(detalle => detalle.classList.remove('activo'));
    btn.classList.add('activo');
    resumenDetalles[idx].classList.add('activo');
  });
});
```



