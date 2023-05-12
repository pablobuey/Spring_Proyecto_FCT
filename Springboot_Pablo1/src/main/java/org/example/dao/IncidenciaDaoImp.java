package org.example.dao;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.example.models.Incidencia;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class IncidenciaDaoImp implements IncidenciaDao {

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Incidencia> getIncidencias() {
        String query = "FROM Incidencia"; //Incidencia es el nombre de la clase, no de la tabla, hibernate_
        return entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminar(Long id) {
        Incidencia incidencia = entityManager.find(Incidencia.class, id);
        entityManager.remove(incidencia);
    }

    @Override
    public void registrar(Incidencia incidencia) {entityManager.merge(incidencia);}

    @Override
    public void actualizar(Long id, Incidencia incidencia) {
        entityManager.merge(incidencia);
    }

    //CREO QUE NO NECESITO OBTENER CREDENCIALES PARA LAS INCIDENCIAS.
    //TENDRÉ QUE ESTAR LOGEADO COMO USUARIO O EMPRESA PARA REGISTRAR/CERRAR INCIDENCIAS.

   /* @Override
    public Incidencia obtenerIncidenciaPorCredenciales(Incidencia incidencia){
        String query = "FROM Incidencia WHERE email = :email";
        List<Incidencia> lista = entityManager.createQuery(query)
                .setParameter("email", incidencia.getEmail())
                .getResultList();

        if(lista.isEmpty()){
            return null;
        }

        String passwordHashed = lista.get(0).getPassword();

        //para comparar la pass con la de la bbdd
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if(argon2.verify(passwordHashed, empresa.getPassword())){

            return lista.get(0);
        }

        return null;
    }
*/

}


/* package org.example.dao;

import org.example.models.Empresa;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class EmpresaDaoImp implements EmpresaDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Empresa> getEmpresas() {
        String query = "FROM Empresa";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long id) {
        Empresa empresa = entityManager.find(Empresa.class, id);
        entityManager.remove(empresa);
    }

    @Override
    public void registrar(Empresa empresa) {
        entityManager.merge(empresa);
    }

    @Override
    public Empresa obtenerEmpresaPorId(Long id) {
        return entityManager.find(Empresa.class, id);
    }

    @Override
    public void actualizar(Long id, Empresa empresa) {
        empresa.setId(id);
        entityManager.merge(empresa);
    }


}



package org.example.dao;

import org.example.models.Incidencia;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class IncidenciaDaoImp implements IncidenciaDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Incidencia> getIncidencias() {
        String query = "FROM Incidencia";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long id) {
        Incidencia incidencia = entityManager.find(Incidencia.class, id);
        entityManager.remove(incidencia);
    }

    @Override
    public void registrar(Incidencia incidencia) {
        entityManager.merge(incidencia);
    }

    @Override
    public Incidencia obtenerIncidenciaPorId(Long id) {
        return entityManager.find(Incidencia.class, id);
    }

    @Override
    public void actualizar(Long id, Incidencia incidencia) {
        incidencia.setId(id);
        entityManager.merge(incidencia);
    }
}*/