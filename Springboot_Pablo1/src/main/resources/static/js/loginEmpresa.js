// Call the dataTables jQuery plugin
$(document).ready(function() {
// on ready
});

function obtenerIdEmpresa() {
  const token = localStorage.token;
  // Realizar la solicitud al endpoint del backend para obtener los datos de la empresa
  fetch('api/empresas', {
    method: 'GET',
    headers: {
      'Authorization': token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Obtener el ID de la empresa de la respuesta del backend
      const empresaId = data.id;
      // Utilizar el ID de la empresa en tu lógica para crear la incidencia en la base de datos

      //localStorage.empresaId = empresaId;
      localStorage.empresaId = empresaId.toString();
    })
    .catch(error => {
      console.error('Error al obtener los datos de la empresa:', error);
    });
}

async function obtenerIdEmpresa_Version2(){
//Con esta funcion en teoria debería almacenar el id de la empresa en el localStorage para usarlo en incidenciasEmpresa.

    const emailPrueba = localStorage.email;
    const token = localStorage.token;

      // Realizar la solicitud al endpoint del backend para obtener los datos de la empresa
      fetch('api/idEmpresaPorEmail?email=' + emailPrueba, {
        method: 'GET',
        headers: {
          'Authorization': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          // Obtener el ID de la empresa de la respuesta del backend
          const empresaId = data.id;
          // Utilizar el ID de la empresa en tu lógica para crear la incidencia en la base de datos
          localStorage.setItem('empresaId', empresaId);
          //localStorage.empresaId = empresaId;
           localStorage.empresaId = empresaId.toString();
        })
        .catch(error => {
          console.error('Error al obtener los datos de la empresa:', error);
        });
}


async function iniciarSesion() {

    //he copiado de registrar.js y dejo email y password
    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

//ESTO LO HE HECHO PARA PODER USARLO EN EL LISTADO DE INCIDENCIAS
localStorage.setItem('storageEmail', document.getElementById('txtEmail').value);
localStorage.setItem('storagePassword', document.getElementById('txtPassword').value);

    //realizar la solicitud al endpoint del login
      const request = await fetch('api/loginEmpresa', { //AuthControllerEmpresa
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

      //obtenerIdEmpresa_Version2();

      window.location.href = 'indexEmpresaLogeada.html'
      } else {
      alert("Las crecenciales son incorrectas. Por favor intente nuevamente")
      }

}