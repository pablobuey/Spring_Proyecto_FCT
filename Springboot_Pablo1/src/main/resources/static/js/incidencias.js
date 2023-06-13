// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarIncidencias();
    $('#incidencias').DataTable();
     //actualizarEmailDeEmpresa();
    });

//no se si esto es suficiente --> no lo es xD
//function actualizarEmailDeEmpresa(){document.getElementById('txt-email-empresa').outerHTML = localStorage.email;}

async function cargarIncidencias() {
    const request = await fetch('api/incidencias', {
    method: 'GET',
    headers: getHeaders()
    });

    const incidencias = await request.json();
    let listadoHtml = '';

    for (let incidencia of incidencias) {
        let botonEliminar = '<a href="#" onclick="eliminarIncidencia(' + incidencia.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let botonActualizar = '<a href="#" onclick="actualizarIncidencia('+ incidencia.id + ',\'' + incidencia.fecha + '\',\'' + incidencia.descripcion + '\',\'' + incidencia.estado + '\',\'' + incidencia.empresaemail +'\')" class="btn btn-info btn-circle btn-sm"><i class="fas fa-pencil-alt"></i></a>';

        let incidenciaHtml = '<tr><td>' + incidencia.id + '</td><td>' + incidencia.fecha + '</td><td>' + incidencia.descripcion + '</td><td>' + incidencia.estado + '</td><td>' + botonEliminar + ' ' + botonActualizar + '</td></tr>';
        listadoHtml += incidenciaHtml;
        }

    document.querySelector('#incidencias tbody').outerHTML = listadoHtml;
}


async function eliminarIncidencia(id) {
    if (!confirm('¿Desea eliminar esta incidencia?')) {
        return;
        }

    const request = await fetch('api/incidencias/' + id, {
        method: 'DELETE',
        headers: getHeaders()
        });
    location.reload();
}

function actualizarIncidencia(id, fecha, descripcion, estado, empresaemail) {
  window.location.href = "actualizarIncidencia.html?id=" + id + "&fecha=" + fecha + "&descripcion=" + descripcion + "&estado=" + estado + "&empresaemail=" + empresaemail;
}

function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}