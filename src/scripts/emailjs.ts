
const formulario = document.getElementById("formulario-contacto");
if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    // @ts-ignore
    emailjs.sendForm('service_zbjh63q', 'template_o4vg2nm', this)
      .then(function(response: any) { // Specify the type of 'response' as 'any'
        console.log('Correo enviado con éxito:', response);
        // Muestra un mensaje de éxito al usuario si lo deseas.
      }, function(error: any) { // Specify the type of 'error' as 'any'
        console.error('Error al enviar el correo:', error);
        // Muestra un mensaje de error al usuario si lo deseas.
      });
  });
}
