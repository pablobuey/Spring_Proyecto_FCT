package org.example.controllers;

import org.example.dao.EmpresaDao;
import org.example.models.Empresa;
import org.example.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class AuthControllerEmpresa {
    @Autowired
    private EmpresaDao empresaDao;
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/loginEmpresa", method = RequestMethod.POST)
    public String login(@RequestBody Empresa empresa) {

        Empresa empresaLogeada = empresaDao.obtenerEmpresaPorCredenciales(empresa);

        if (empresaLogeada != null) {

            return jwtUtil.create(String.valueOf(empresaLogeada.getId()),empresaLogeada.getEmail());
        }
        return "FAIL";
    }



    @RequestMapping(value = "api/obtenerIdEmpresa", method = RequestMethod.POST)
    public Long obtenerIdEmpresa(@RequestBody Empresa empresa) {

        Empresa empresaLogeada = empresaDao.obtenerEmpresaPorCredenciales(empresa);

            return empresaLogeada.getId();

    }
}
