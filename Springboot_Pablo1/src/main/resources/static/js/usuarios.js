// Call the dataTables jQuery plugin
$(document).ready(function() {
cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();

});

function actualizarEmailDelUsuario(){
document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}

async function cargarUsuarios() {

//se usa async porque estamos utilizando el termino await:
//lo que hace es esperar el resultado de la llamada, el codigo se detiene ahi hasta obtenerlo
//para llamar al servidor usamos fetch

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });

  const usuarios = await request.json();

  let listadoHtml = '';

    for (let usuario of usuarios){

    let botonEliminar ='<a href="#" onclick="eliminarUsuario('+ usuario.id +')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
let botonActualizar = '<a href="#" onclick="actualizarUsuario('+ usuario.id +',\''+ usuario.nombre +'\',\''+ usuario.apellido +'\',\''+ usuario.email +'\')" class="btn btn-info btn-circle btn-sm"><i class="fas fa-pencil-alt"></i></a>';
let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono;

//let botonActualizar = '<a href="#" onclick="actualizarUsuario('+ usuario.id +',\''+ usuario.nombre +'\')" class="btn btn-info btn-circle btn-sm"><i class="fas fa-pencil-alt"></i></a>';

      let usuarioHtml = '<tr><td>' + usuario.id +'</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>'
                      + usuario.email + '</td><td>' + telefonoTexto
                      + '</td><td>' + botonEliminar +' '+ botonActualizar + '</td></tr>';
listadoHtml += usuarioHtml;

    }

  document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}

function getHeaders(){
    return {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': localStorage.token
            };
}

async function eliminarUsuario(id){

if (!confirm('¿Desea eliminar este usuario?')){

return;

}

const request = await fetch('api/usuarios/' + id, {
    method: 'DELETE',
    headers: getHeaders()
    });

    location.reload()

}

function actualizarUsuario(id, nombre, apellido, email) {

  window.location.href = "actualizar.html?id=" + id + "&nombre=" + nombre + "&apellido=" + apellido + "&email=" + email;


}
