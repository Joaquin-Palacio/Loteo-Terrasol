document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("response");
  const btn = document.getElementById('button');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const phoneInput = formData.get("number");

    // Validación de número de teléfono (solo números y longitud de 10 dígitos)
    if (!/^\d{10}$/.test(phoneInput)) {
      responseDiv.innerHTML = '<div class="alert alert-danger">Ingrese un número de teléfono válido a 10 dígitos</div>';
      return;
    }

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_ayfr1cn';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.value = 'Enviar Email';
        responseDiv.innerHTML = '<div class="alert alert-success">Mensaje enviado con éxito</div>';
        form.reset();

        // Mostrar el mensaje de éxito durante 5 segundos
        setTimeout(() => {
          responseDiv.innerHTML = ''; // Limpiar el mensaje
        }, 5000);
      })
      .catch((err) => {
        btn.value = 'Enviar Email';
        responseDiv.innerHTML = '<div class="alert alert-danger">Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.</div>';
      });
  });
});
