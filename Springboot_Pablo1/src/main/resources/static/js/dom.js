      // Obtener el valor del parámetro "id" de la URL
{
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      const nombre = urlParams.get('nombre');
      const apellido = urlParams.get('apellido');
      const email = urlParams.get('email');

      //id
      document.getElementById('txtId').value = id;
      const txtId = document.getElementById('txtId');
      txtId.value = id;
      txtId.placeholder = id;

      //nombre
      document.getElementById('txtNombre').value = nombre;
      const txtNombre = document.getElementById('txtNombre');
      txtNombre.value = nombre;
      txtNombre.placeholder = nombre;

      //apellido
      document.getElementById('txtApellido').value = apellido;
      const txtApellido = document.getElementById('txtApellido');
      txtApellido.value = apellido;
      txtApellido.placeholder = apellido;

      //email
      document.getElementById('txtEmail').value = email;
      const txtEmail = document.getElementById('txtEmail');
      txtEmail.value = email;
      txtEmail.placeholder = email;




}
      // Asignar el valor de "id" al campo de texto "txtId"

      //document.getElementById('txtId').value = id;
      //const txtId = document.getElementById('txtId');
      //txtId.value = id;
      //txtId.placeholder = id;

      //Asignar el valor del nombre al campo de texto txtNombre
