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
  const nombre = document.getElementById('txtNombreEmpresa').value;

  const email = document.getElementById('txtEmailEmpresa').value;
  const direccion = document.getElementById('txtDireccionEmpresa').value;
  const cp = document.getElementById('txtCPEmpresa').value;
  const localidad = document.getElementById('txtLocalidadEmpresa').value;
  const provincia = document.getElementById('txtProvinciaEmpresa').value;
  const telefono = document.getElementById('txtTelefonoEmpresa').value;
  const cif = document.getElementById('txtCifEmpresa').value;
  const persona_contacto = document.getElementById('txtPersonaContactoEmpresa').value;


  const password = document.getElementById('txtPasswordEmpresa').value;
  const repetirPassword = document.getElementById('txtRepetirPasswordEmpresa').value;

  // Validar que los campos no estén vacíos
  if (!nombre || !email || !direccion || !cp || !localidad || !provincia || !telefono || !cif || !persona_contacto) {
    alert('Por favor, rellene todos los campos.');
    return;
  }

  // Validar que las contraseñas coincidan
  if (password !== repetirPassword) {
    alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
    return;
  }

  // Crear un objeto con los datos de la empresa a actualizar
  const empresa = {
    id: id,
    nombre: nombre,
    direccion: direccion,
    email: email,
    cp: cp,
    localidad: localidad,
    provincia: provincia,
    telefono: telefono,
    cif: cif,
    persona_contacto: persona_contacto,
    password: password
  };

  try {
    // Enviar una petición PUT para actualizar los datos del usuario
    const response = await fetch(`/api/empresas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(empresa)
    });

    if (response.ok) {
      alert('Empresa actualizado correctamente.');
      window.location.href = 'empresas.html';
    } else {
      throw new Error('Error al actualizar la empresa.');
    }
  } catch (error) {
    alert(error.message);
  }
});