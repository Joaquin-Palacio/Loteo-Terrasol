// Función que muestra u oculta el botón según el scroll
function mostrarBoton() {
  var boton = document.getElementById('boton-inicio'); // Obtiene el botón por su id
  if (window.scrollY > 200) {
    // Si el scroll es mayor que 100 píxeles
    boton.style.display = 'block'; // Muestra el botón
  } else {
    // Si no
    boton.style.display = 'none'; // Oculta el botón
  }
}

// Función que hace scroll hasta el inicio de la página
function irAlInicio() {
  window.scrollTo(0, 0); // Mueve el scroll a la posición (0, 0)
}

// Añade un evento de tipo "scroll" a la ventana que llama a la función mostrarBoton
window.addEventListener('scroll', mostrarBoton);

// Añade un evento de tipo "click" al botón que llama a la función irAlInicio
var boton = document.getElementById('boton-inicio'); // Obtiene el botón por su id
boton.addEventListener('click', irAlInicio);



/* ========== JS de BOOSTRAP ========== */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
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
