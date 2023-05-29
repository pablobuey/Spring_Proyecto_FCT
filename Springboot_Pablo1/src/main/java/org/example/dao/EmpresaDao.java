package org.example.dao;

import org.example.models.Empresa;


import java.util.List;

public interface EmpresaDao {

    List<Empresa> getEmpresas();


    void eliminar(Long id);

    void registrar(Empresa empresa);

    Empresa obtenerEmpresaPorCredenciales(Empresa empresa);

    void actualizar(Long id, Empresa empresa);

    Integer getIdEmpresaPorEmail(String Email);


}





/*package org.example.dao;

import org.example.models.Empresa;

import java.util.List;

public interface EmpresaDao {

    List<Empresa> getEmpresas();

    void eliminar(Long id);

    void registrar(Empresa empresa);

    Empresa obtenerEmpresaPorId(Long id);

    void actualizar(Long id, Empresa empresa);

}*/