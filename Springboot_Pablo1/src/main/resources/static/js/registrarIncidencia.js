// Call the dataTables jQuery plugin
$(document).ready(function() {
// on ready
});

async function registrarIncidencia() {

    //se usa async porque estamos utilizando el termino await:
    //lo que hace es esperar el resultado de la llamada, el codigo se detiene ahi hasta obtenerlo
    //para llamar al servidor usamos fetch
    let datos = {};

    datos.fecha = '22/2/22';
    //document.getElementById('txtFechaIncidencia').value;
    datos.descripcion = 'blablabla';
    //document.getElementById('txDescripcionIncidencia').value;
    datos.estado = 'abierta';
    datos.id_empresa = 8;
    //esto es nuevo, para poder meter la id de la empresa que registra la incidencia a través del localStorage.
    //datos.id_empresa = localStorage.empresaId;


      const request = await fetch('api/incidencias', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      alert("La incidencia fue registrada con exito!");
      window.location.href = 'indexEmpresaLogeada.html' //te lleva a login para que te logees después de registrarte

}


