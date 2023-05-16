// Call the dataTables jQuery plugin
$(document).ready(function() {

  // on ready
  Promise.all([cargarUsuarios(), cargarEmpresas()]).then(() => {
    // Ambas funciones de carga de datos se han completado
    iniciarSesion();
  });
});





function getHeaders(){
    return{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}





let tipoLogin = "...";


async function iniciarSesion() {
  //he copiado de registrar.js y dejo email y password
    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    async function cargarEmpresas() {
         const request = await fetch('api/empresas', {
            method: 'GET',
            headers: getHeaders()
        });

        const empresas = await request.json();

        for (let empresa of empresas) {

            if (empresa.email == datos.email){
            tipoLogin = "empresa";
            console.log(tipoLogin + " log de empresas")
            }
        }
    }


    async function cargarUsuarios() {
         const request = await fetch('api/usuarios', {
            method: 'GET',
            headers: getHeaders()
        });

        const usuarios = await request.json();

        for (let usuario of usuarios) {

            if (usuario.email == datos.email){
            tipoLogin = "usuario";
            console.log(tipoLogin + " log de usuarios")
            }
        }
    }






    if (tipoLogin == "usuario"){
        //realizar la solicitud al endpoint del login
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

    else if(tipoLogin == "empresa"){
    //realizar la solicitud al endpoint del login
          const request = await fetch('api/loginEmpresa', {
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
          window.location.href = 'empresas.html'
          } else {
          alert("Las crecenciales son incorrectas. Por favor intente nuevamente")
          }
        }

        else {
        //realizar la solicitud al endpoint del login
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
               alert(tipoLogin)
              window.location.href = 'index.html'
              } else {
              alert("Las crecenciales son incorrectas. Por favor intente nuevamente")
              }
        }

}

