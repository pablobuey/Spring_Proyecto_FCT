package org.example.controllers;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.example.dao.EmpresaDao;
import org.example.models.Empresa;
import org.example.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpresaController {

    //inyección de dependencias
    @Autowired
    private EmpresaDao empresaDao;

    @Autowired
    private JWTUtil jwtUtil;

    private boolean validarToken(String token) {

        String empresaId = jwtUtil.getKey(token);
        return empresaId != null;

    }
/////LISTAR, REGISTRAR, ELIMINAR Y ACTUALIZAR EMPRESAS

    @RequestMapping(value = "api/empresas", method = RequestMethod.GET)
    public List<Empresa> getEmpresas(@RequestHeader(value = "Authorization") String token) {
        //de esta forma guardamos en la variable token el propio token
        //para verificarlo:
        if (!validarToken(token)) {
            return null;
        }

        return empresaDao.getEmpresas();
    }


    @RequestMapping(value = "api/empresas", method = RequestMethod.POST)
    public void registrarEmpresa(@RequestBody Empresa empresa) {

        //Proceso de HASH. En el pom.xml metemos dependencias para libreria argon2
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

        //1 es el número de iteraciones, a más, mayor seguridad, 1024=memoria, 1 el n.º de hilos,
        String hash = argon2.hash(1, 1024, 1, empresa.getPassword());
        empresa.setPassword(hash);

        empresaDao.registrar(empresa);
    }

    @RequestMapping(value = "api/empresas/{id}", method = RequestMethod.DELETE) //DELETE para borrar
    public void eliminar(@RequestHeader(value = "Authorization") String token,
                         @PathVariable Long id) { //PathVariable hace que el valor de {id} lo recibas en el Long id

        if (!validarToken(token)) {
            return;
        }
        empresaDao.eliminar(id); //esto creo que igual no funciona, porque se llama igual el metodo aqui que en el DAO e igual se confunde? no lo he probado.
    }

    @RequestMapping(value = "api/empresas/{id}", method = RequestMethod.PUT)
    public void actualizarEmpresa(@RequestHeader(value = "Authorization") String token,
                                  @PathVariable Long id,
                                  @RequestBody Empresa empresa) {

        if (!validarToken(token)) {
            return;
        }
        empresaDao.actualizar(id, empresa);
    }


    @RequestMapping(value = "api/idEmpresaPorEmail", method = RequestMethod.GET)
    public Integer getIdEmpresaPorEmail(@RequestHeader(value = "Authorization") String token,
                                        @RequestParam String Email) {

        if (!validarToken(token)) {
            return null;
        }

        return empresaDao.getIdEmpresaPorEmail(Email);
    }



}
