      // Obtener el valor del parámetro "id" de la URL
{


      const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            const nombre = urlParams.get('nombre');
            const direccion = urlParams.get('direccion');
            const email = urlParams.get('email');
            const cp = urlParams.get('cp');
            const localidad = urlParams.get('localidad');
            const provincia = urlParams.get('provincia');
            const telefono = urlParams.get('telefono');
            const cif = urlParams.get('cif');
            const persona_contacto = urlParams.get('persona_contacto');

      //id
      document.getElementById('txtId').value = id;
      const txtId = document.getElementById('txtId');
      txtId.value = id;
      txtId.placeholder = id;

      //nombre
      document.getElementById('txtNombreEmpresa').value = nombre;
      const txtNombreEmpresa = document.getElementById('txtNombreEmpresa');
      txtNombreEmpresa.value = nombre;
      txtNombreEmpresa.placeholder = nombre;

      //apellido
      document.getElementById('txtDireccionEmpresa').value = direccion;
      const txtDireccionEmpresa = document.getElementById('txtDireccionEmpresa');
      txtDireccionEmpresa.value = direccion;
      txtDireccionEmpresa.placeholder = direccion;

      //email
      document.getElementById('txtEmailEmpresa').value = email;
      const txtEmailEmpresa = document.getElementById('txtEmailEmpresa');
      txtEmailEmpresa.value = email;
      txtEmailEmpresa.placeholder = email;

      //cp
      document.getElementById('txtCPEmpresa').value = cp;
      const txtCPEmpresa = document.getElementById('txtCPEmpresa');
      txtCPEmpresa.value = cp;
      txtCPEmpresa.placeholder = cp;

      //localidad
      document.getElementById('txtLocalidadEmpresa').value = localidad;
      const txtLocalidadEmpresa = document.getElementById('txtLocalidadEmpresa');
      txtLocalidadEmpresa.value = localidad;
      txtLocalidadEmpresa.placeholder = localidad;

      //provincia
      document.getElementById('txtProvinciaEmpresa').value = provincia;
      const txtProvinciaEmpresa = document.getElementById('txtProvinciaEmpresa');
      txtProvinciaEmpresa.value = provincia;
      txtProvinciaEmpresa.placeholder = provincia;

      //telefono
      document.getElementById('txtTelefonoEmpresa').value = telefono;
      const txtTelefonoEmpresa = document.getElementById('txtTelefonoEmpresa');
      txtTelefonoEmpresa.value = telefono;
      txtTelefonoEmpresa.placeholder = telefono;

      //cif
      document.getElementById('txtCifEmpresa').value = cif;
      const txtCifEmpresa = document.getElementById('txtCifEmpresa');
      txtCifEmpresa.value = cif;
      txtCifEmpresa.placeholder = cif;

      //cif
      document.getElementById('txtPersonaContactoEmpresa').value = persona_contacto;
      const txtPersonaContactoEmpresa = document.getElementById('txtPersonaContactoEmpresa');
      txtPersonaContactoEmpresa.value = persona_contacto;
      txtPersonaContactoEmpresa.placeholder = persona_contacto;

}

