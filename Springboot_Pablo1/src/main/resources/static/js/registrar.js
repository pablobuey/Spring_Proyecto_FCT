// Call the dataTables jQuery plugin
$(document).ready(function() {
// on ready
});

async function registrarUsuario() {

//se usa async porque estamos utilizando el termino await:
//lo que hace es esperar el resultado de la llamada, el codigo se detiene ahi hasta obtenerlo
//para llamar al servidor usamos fetch
let datos = {};
datos.nombre = document.getElementById('txtNombre').value;
datos.apellido = document.getElementById('txtApellido').value;
datos.email = document.getElementById('txtEmail').value;
datos.password = document.getElementById('txtPassword').value;

let repetirPassword = document.getElementById('txtRepetirPassword').value;

if (repetirPassword != datos.password){
alert('La contraseña que has introducido es diferente');
return;
}

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  alert("La cuenta fue creada con éxito!");
  window.location.href = 'login.html' //te lleva a login para que te logees después de registrarte

}


