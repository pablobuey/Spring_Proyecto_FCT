package org.example.controllers;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.example.dao.UsuarioDao;
import org.example.models.Usuario;
import org.example.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    //inyección de dependencias
    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/usuarios", method = RequestMethod.GET)
    public List<Usuario> getUsuarios(@RequestHeader(value = "Authorization") String token) {
        //de esta forma guardamos en la variable token el propio token
        //para verificarlo:
        if (!validarToken(token)) {
            return null;
        }

        return usuarioDao.getUsuarios();
    }

    private boolean validarToken(String token) {

        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;

    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario) {

        //Proceso de HASH. En el pom.xml metemos dependencias para libreria argon2
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

        //1 es el numero de iteraciones, a más, mayor seguridad, 1024=memoria, 1 el nº de hilos,
        String hash = argon2.hash(1, 1024, 1, usuario.getPassword());
        usuario.setPassword(hash);

        usuarioDao.registrar(usuario);
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE) //DELETE para borrar
    public void eliminar(@RequestHeader(value = "Authorization") String token,
                         @PathVariable Long id) { //PathVariable hace que el valor de {id} lo recibas en el Long id

        if (!validarToken(token)) {
            return;
        }
        usuarioDao.eliminar(id);
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.PUT)
    public void actualizarUsuario(@RequestHeader(value = "Authorization") String token,
                                  @PathVariable Long id,
                                  @RequestBody Usuario usuario) {

        if (!validarToken(token)) {
            return;
        }
        usuarioDao.actualizar(id, usuario);
    }

}
