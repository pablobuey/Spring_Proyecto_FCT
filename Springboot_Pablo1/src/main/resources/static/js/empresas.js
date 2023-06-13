// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarEmpresas();
    $('#empresas').DataTable();
    });

async function cargarEmpresas() {
     const request = await fetch('api/empresas', {
        method: 'GET',
        headers: getHeaders()
    });

    const empresas = await request.json();
    let listadoHtml = '';

    for (let empresa of empresas) {
        let botonEliminar = '<a href="#" onclick="eliminarEmpresa(' + empresa.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let botonActualizar = '<a href="#" onclick="actualizarEmpresa('+ empresa.id + ',\'' + empresa.nombre + '\',\'' + empresa.direccion + '\',\'' + empresa.cp + '\',\'' + empresa.localidad + '\',\'' + empresa.provincia + '\',\'' + empresa.cif + '\',\'' + empresa.email +  '\',\'' + empresa.telefono +  '\',\'' + empresa.persona_contacto+'\')" class="btn btn-info btn-circle btn-sm"><i class="fas fa-pencil-alt"></i></a>';


        let telefonoTexto = empresa.telefono == null ? '-' : empresa.telefono;

        let empresaHtml = '<tr><td>' + empresa.id + '</td><td>' + empresa.nombre + '</td><td>' + empresa.direccion + '</td><td>' + empresa.cp + '</td><td>' + empresa.localidad + '</td><td>' + empresa.provincia + '</td><td>' + empresa.cif + '</td><td>' + empresa.email + '</td><td>' + telefonoTexto + '</td><td>' + empresa.persona_contacto + '</td><td>' + botonEliminar + ' ' + botonActualizar + '</td></tr>';
        listadoHtml += empresaHtml;
        }
    document.querySelector('#empresas tbody').outerHTML = listadoHtml;
}

async function eliminarEmpresa(id) {
    if (!confirm('¿Desea eliminar esta empresa?')) {
        return;
    }

    const request = await fetch('api/empresas/' + id, {method: 'DELETE', headers: getHeaders()});
    location.reload();
}

function actualizarEmpresa(id, nombre, direccion, cp, localidad, provincia, cif, email, telefonoTexto, persona_contacto) {
    window.location.href = "actualizarEmpresa.html?id=" + id + "&nombre=" + nombre + "&direccion=" + direccion + "&cp=" + cp + "&localidad=" + localidad + "&provincia=" + provincia + "&cif=" + cif + "&email=" + email + "&telefono=" + telefonoTexto + "&persona_contacto=" + persona_contacto;
}


function getHeaders() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        };
}