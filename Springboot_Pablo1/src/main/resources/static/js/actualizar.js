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
  const nombre = document.getElementById('txtNombre').value;
  const apellido = document.getElementById('txtApellido').value;
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPassword').value;
  const repetirPassword = document.getElementById('txtRepetirPassword').value;

  // Validar que los campos no estén vacíos
  if (!nombre || !apellido || !email || !password || !repetirPassword) {
    alert('Por favor, rellene todos los campos.');
    return;
  }

  // Validar que las contraseñas coincidan
  if (password !== repetirPassword) {
    alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
    return;
  }

  // Crear un objeto con los datos del usuario a actualizar
  const usuario = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    email: email,
    password: password
  };

  try {
    // Enviar una petición PUT para actualizar los datos del usuario
    const response = await fetch(`/api/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify(usuario)
    });

    if (response.ok) {
      alert('Usuario actualizado correctamente.');
      window.location.href = 'usuarios.html';
    } else {
      throw new Error('Error al actualizar el usuario.');
    }
  } catch (error) {
    alert(error.message);
  }
});