      // Obtener el valor del parámetro "id" de la URL
{


      const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            const fecha = urlParams.get('fecha');
            const descripcion = urlParams.get('descripcion');
            const estado = urlParams.get('estado');
            const empresaemail = urlParams.get('empresaemail');


      //id
      document.getElementById('txtId').value = id;
      const txtId = document.getElementById('txtId');
      txtId.value = id;
      txtId.placeholder = id;

      //fecha
      document.getElementById('txtFechaIncidencia').value = fecha;
      const txtFechaIncidencia = document.getElementById('txtFechaIncidencia');
      txtFechaIncidencia.value = fecha;
      txtFechaIncidencia.placeholder = fecha;

      //descripcion
      document.getElementById('txDescripcionIncidencia').value = descripcion;
      const txDescripcionIncidencia = document.getElementById('txDescripcionIncidencia');
      txDescripcionIncidencia.value = descripcion;
      txDescripcionIncidencia.placeholder = descripcion;

      //estado
      document.getElementById('txtEstadoIncidencia').value = email;
      const txtEstadoIncidencia = document.getElementById('txtEstadoIncidencia');
      txtEstadoIncidencia.value = estado;
      txtEstadoIncidencia.placeholder = estado;

      //empresaemail
      document.getElementById('txtEmpresaEmailIncidencia').value = empresaemail;
      const txtEmpresaEmailIncidencia = document.getElementById('txtEmpresaEmailIncidencia');
      txtEmpresaEmailIncidencia.value = empresaemail;
      txtEmpresaEmailIncidencia.placeholder = empresaemail;

}

