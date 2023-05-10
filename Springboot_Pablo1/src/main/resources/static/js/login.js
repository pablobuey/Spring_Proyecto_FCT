// Call the dataTables jQuery plugin
$(document).ready(function() {
// on ready
});

async function iniciarSesion() {

//he copiado de registrar.js y dejo email y password
let datos = {};
datos.email = document.getElementById('txtEmail').value;
datos.password = document.getElementById('txtPassword').value;

  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  if (respuesta != 'FAIL') {
  localStorage.token = respuesta; //para guardar en la parte cliente el login
  localStorage.email = datos.email; // para guardar el email. Datos lo hemos creado arriba
  window.location.href = 'usuarios.html'
  } else {
  alert("Las crecenciales son incorrectas. Por favor intente nuevamente")
  }

}
