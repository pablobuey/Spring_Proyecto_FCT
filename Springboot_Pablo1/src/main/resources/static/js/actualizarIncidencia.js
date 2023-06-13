// Obtener el valor del parámetro "id" de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Asignar el valor del ID al atributo "placeholder" del campo de entrada de texto
const txtId = document.getElementById('txtId');
txtId.placeholder = id;

// Obtener el formulario y escuchar el evento submit
const form = document.getElementById('update-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores de los campos del formulario
  const descripcion = document.getElementById('txDescripcionIncidencia').value;
  const fecha = document.getElementById('txtFechaIncidencia').value;
  const estado = document.getElementById('txtEstadoIncidencia').value;

  const empresaemail = document.getElementById('txtEmpresaEmailIncidencia').value;


  // Validar que los campos no estén vacíos
  if (!descripcion || !fecha || !estado || !empresaemail) {
    alert('Por favor, rellene todos los campos.');
    return;
  }


  // Crear un objeto con los datos de la empresa a actualizar
  const incidencia = {
    descripcion: descripcion,
    fecha: fecha,
    estado: estado,
    empresaemail: empresaemail,

  };

  try {
    // Enviar una petición PUT para actualizar los datos del usuario
    const response = await fetch(`/api/incidencias/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(incidencia)
    });

    if (response.ok) {
      alert('Incidencia actualizada correctamente.');
      window.location.href = 'incidencias.html';
    } else {
      throw new Error('Error al actualizar la incidencia.');
    }
  } catch (error) {
    alert(error.message);
  }
});