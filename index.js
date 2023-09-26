// Función que muestra u oculta el botón según el scroll
function mostrarBoton() {
  let boton = document.getElementById('boton-inicio');
  if (window.scrollY > 200) {
    boton.style.display = 'block';
  } else {
    boton.style.display = 'none';
  }
}
// Función que hace scroll hasta el inicio de la página
function irAlInicio() {
  window.scrollTo(0, 0); // Mueve el scroll a la posición (0, 0)
}

window.addEventListener('scroll', mostrarBoton);

// Añade un evento de tipo "click" al botón que llama a la función irAlInicio
let boton = document.getElementById('boton-inicio');
boton.addEventListener('click', irAlInicio);

/* ========== JS de BOOSTRAP ========== */
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

