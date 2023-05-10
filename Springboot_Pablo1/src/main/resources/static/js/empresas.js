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
let botonActualizar = '<a href="#" onclick="actualizarEmpresa(' + empresa.id + ')" class="btn btn-info btn-circle btn-sm"><i class="fas fa-pencil-alt"></i></a>';
let telefonoTexto = empresa.telefono == null ? '-' : empresa.telefono;
let empresaHtml = '<tr><td>' + empresa.id + '</td><td>' + empresa.nombre + '</td><td>' + empresa.direccion + '</td><td>' + empresa.cp + '</td><td>' + empresa.localidad + '</td><td>' + empresa.provincia + '</td><td>' + empresa.cif + '</td><td>' + empresa.email + '</td><td>' + telefonoTexto + '</td><td>' + empresa.personaContacto + '</td><td>' + botonEliminar + ' ' + botonActualizar + '</td></tr>';
listadoHtml += empresaHtml;
}
document.querySelector('#empresas tbody').outerHTML = listadoHtml;
}

async function eliminarEmpresa(id) {
if (!confirm('¿Desea eliminar esta empresa?')) {
return;
}
const request = await fetch('api/empresas/' + id, {
method: 'DELETE',
headers: getHeaders()
});
location.reload();
}

function actualizarEmpresa(id) {
window.location.href = "actualizar.html?id=" + id;
}

function getHeaders() {
return {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': localStorage.token
};
}