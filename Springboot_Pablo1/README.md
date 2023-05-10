# Pablo info
// Estas son notas que me iba dejando a modo de historial para saber en qué punto me quedé, y por si me volvían a surgir los mismos problemas, poder acudir a la solución fácilmente.
Abajo dejo la descripción original del proyecto (la del autor del curso).

Pasos que he dado para crearlo desde cero:

- Nuevo proyecto Java con Maven
- Le he añadido las dependencias de Spring boot que venían en el proyecto original al archivo pom.xml 
- También he añadido las clases CursoApplication y ServletInitializer porque el curso empieza con esas clases ya.
- He creado dentro de resources la carpeta static y dentro el archivo index.html con el mensaje holamundo.
- También he añadido el archivo application.properties del curso, pero como me levantaba el proyecto, he probado a crear una bbdd llamada springprueba y lo he añadido al archivo application.properties.
- He dado marcha a mi servidor Apache y a SQL de XAMPP.
- Después el curso decía que a la derecha en Maven -> Plugins -> spring-boot -> run para darle marcha.
- De esta manera Maven debe poner en marcha su servidor Tomcat para levantar la aplicación.
- Tal como pone en el application.properties el puerto es el 8080, así que al poner en el buscador localhost:8080 debería salir (y sale) el holamundo del index.html (carpeta resources).
- He tenido problemas apagando el servicio de Tomcat, se quedaba el servicio trabajando y al volverle a dar marcha no me dejaba volverlo a usar.
- Para eso, en XAMPP puedes ver el PID (número de identificación del proceso).
- En el cmd de Windows pones "taskkill /pid numeroPID /f" y esto mata el proceso, verás en XAMPP como se apaga.
(no hace falta hacer esto, realmente hay que tirar el servicio desde el IDE, en mi caso IntelliJ, dandole a STOP. El problema era que le daba a run todo el rato sin pararlo!)
- Ahora puedes volverle a dar marcha.
- Me he bajado una plantilla llamada sbadmin 2 download en google para el html.
- Se elimina el archivo index.html y se pega todo el contenido descargado de la plantilla en la carpeta static
- Si se ha quedado cacheado el archivo index.html, en Maven->clean:clean se borra el caché.
- Ahora al meter localhost:8080 se puede ver la plantilla.
- Después crea la carpeta models y creamos la clase usuario.

23/02/2023

- Ahora al poner localhost:8080/usuario/ el numero que quieras, saldrá toda la info del objeto Usuario con la ID que le has puesto en el navegador.
- en el archivo usuarios.html, en los atributos de la table hay un id, se llama usuarios. Hace referencia al archivo usuarios.js que hemos creado en la carpeta js.
- Ese archivo contiene una función que ejecuta un codigo.
- Me he quedado en el 1:45 del video

28/02/2023

- He comenzado con los Dao
- He añadido una dependencia para conector mysql
- Me he quedado en 2:10 aprox.

07/03/2023

- Terminado el Eliminar Usuario. Minuto 2:41
- 2:58

09/03/2023

- Los html recogen por id los inputs y a través de los scripts del final, van al archivo .js en donde están las funcionalidades.
- En el UsuarioController he metido un HASH para la contraseña, es interesante.


13/03/2023

- Acabo de hacer el login en login.js. Al logearte en localhost:8080/login.html al darle a F12 y a Application, en LocalStorage sale el token.

15/03/2023

- He tenido un problema con un Script porque encontraba una variable repetida. Poniendo el Script entre dos corchetes {} como si fuese un objeto he solucionado el problema.

16/03/2023

- Se me ha cacheado un JavaScript (no sabía que se cachearan también). Finalmente la última versión del archivo actualizar.js ha funcionado correctamente, CRUD terminado!!

Me gustaría añadir la parte de los Roles, crear administradores y empresas, poder crear incidencias, enviar emails y crear PDFs.


ENLACE DEL CURSO: 
https://www.youtube.com/watch?v=7vHzVN0EiQc&t=1866s&ab_channel=LucasMoy

Notas del autor:
# Curso-de-Springboot-Hibernate

Curso de Java Fullstack (Springboot, Hibernate y JWT Session)

Si tienes interés en dominar Java Web Services con Spring Boot o en desarrollar API RestFUL a nivel empresarial, Udemy tiene un curso para ti.


Acceso al Curso completo: https://www.youtube.com/watch?v=7vHzVN0EiQc

Ayúdame a seguir creciendo, te invito a suscribirte: 

👉 Youtube: http://bit.ly/LucasMoy


Puedes encontrarme también en:

🔹 Instagram: https://www.instagram.com/lucasmoy.dev/

🔹 Facebook: https://www.fb.com/lucasmoy.dev/

🔹 Twitter: https://twitter.com/lucasmoy_dev/

