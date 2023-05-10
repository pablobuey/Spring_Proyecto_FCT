package org.example.controllers;

import org.example.dao.UsuarioDao;
import org.example.models.Usuario;
import org.example.utils.JWTUtil;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//para gestionar el inicio de sesion

@RestController
public class AuthController {
@Autowired
    private UsuarioDao usuarioDao;
@Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario) {

        Usuario usuarioLogueado = usuarioDao.obtenerUsuarioPorCredenciales(usuario);

        if (usuarioLogueado != null) {

            return jwtUtil.create(String.valueOf(usuarioLogueado.getId()), usuarioLogueado.getEmail());
        }
        return "FAIL";
    }
}
