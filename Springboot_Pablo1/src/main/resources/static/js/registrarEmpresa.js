// Call the dataTables jQuery plugin
$(document).ready(function() {
// on ready
});

async function registrarEmpresa() {

    //se usa async porque estamos utilizando el termino await:
    //lo que hace es esperar el resultado de la llamada, el codigo se detiene ahi hasta obtenerlo
    //para llamar al servidor usamos fetch
    let datos = {};
    datos.nombre = document.getElementById('txtNombreEmpresa').value;
    datos.email= document.getElementById('txtEmailEmpresa').value;
    datos.direccion = document.getElementById('txtDireccionEmpresa').value;
    datos.localidad = document.getElementById('txtLocalidadEmpresa').value;
    datos.provincia = document.getElementById('txtProvinciaEmpresa').value;
    datos.telefono = document.getElementById('txtTelefonoEmpresa').value;
    datos.cif= document.getElementById('txtCifEmpresa').value;
    datos.persona_contacto = document.getElementById('txtPersonaContactoEmpresa').value;
    datos.cp = document.getElementById('txtCPEmpresa').value;


    datos.password = document.getElementById('txtPasswordEmpresa').value;
    let repetirPassword = document.getElementById('txtRepetirPasswordEmpresa').value;

    if (repetirPassword != datos.password){
    alert('La contraseña que has introducido es diferente');
    return;
    }

      const request = await fetch('api/empresas', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      alert("La cuenta fue creada con éxito!");
      window.location.href = 'indexEmpresa.html' //te lleva a login para que te logees después de registrarte

}


