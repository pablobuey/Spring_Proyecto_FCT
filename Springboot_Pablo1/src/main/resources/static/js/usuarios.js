/*
Document es un objeto predefinido que representa el modelo de objetos (DOM) del documento HTML cargado en el navegador.
$ es un alias de jQuery, es como poner jQuery(document)...
'document' es el HTML que está cargandose en el navegador.
Esta función ejecuta las funciones que contiene una vez el documento Html esté cargado en el navegador.
*/

$(document).ready(function(){
    cargarUsuarios();
    $('#usuarios').DataTable();
    actualizarEmailDelUsuario();
});

//Esta función se utiliza para mostrar el email del usuario logeado:
function actualizarEmailDelUsuario(){
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}

//Función que itera sobre la BBDD usuarios para cargarla en la tabla del HTML.
async function cargarUsuarios(){
    /*
    Se usa async porque estamos utilizando el termino await:
    Lo que hace es esperar el resultado de la llamada, el codigo se detiene ahi hasta obtenerlo.
    Para llamar al servidor usamos fetch.
    La solicitud GET obtendrá los datos de la api con la URL especificada: api/usuarios que se encuentra en el controlador UsuarioController.
    */
    const request = await fetch('api/usuarios',{
        method: 'GET',
        headers: getHeaders() //información relativa al encabezado. Los encabezados pueden incluir información adicional, como la autenticación o el tipo de contenido.
    });


    //constante usuarios que contiene la información de la petición
    const usuarios = await request.json();
    let listadoHtml = '';

    //iteración sobre usuarios
    for (let usuario of usuarios){

        let botonEliminar ='<a href="#" onclick="eliminarUsuario('+ usuario.id +')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let botonActualizar = '<a href="#" onclick="actualizarUsuario('+ usuario.id +',\''+ usuario.nombre +'\',\''+ usuario.apellido +'\',\''+ usuario.email +'\')" class="btn btn-info btn-circle btn-sm"><i class="fas fa-pencil-alt"></i></a>';

        //esto lo he metido porque no hay aún campo telefono en el formulario y así meto un - en el listado
        let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono;

        //inserción de los campos en la tabla
        let usuarioHtml = '<tr><td>' + usuario.id +'</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>' + usuario.email + '</td><td>' + telefonoTexto + '</td><td>' + botonEliminar +' '+ botonActualizar + '</td></tr>';
        listadoHtml += usuarioHtml;
    }

    //en la tabla con id usuarios:
    document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}

//para el header de la request
function getHeaders(){
    return{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}

//para el botón de eliminar usuario
async function eliminarUsuario(id){
    if (!confirm('¿Desea eliminar este usuario?')){
        return;
    }

    const request = await fetch('api/usuarios/' + id,{
        method: 'DELETE',
        headers: getHeaders()
        });

    location.reload()
}

//para el botón de actualizar usuario
function actualizarUsuario(id, nombre, apellido, email){
    window.location.href = "actualizar.html?id=" + id + "&nombre=" + nombre + "&apellido=" + apellido + "&email=" + email;
}
