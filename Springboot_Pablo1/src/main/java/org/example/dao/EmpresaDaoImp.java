package org.example.dao;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.example.models.Empresa;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Transactional
public class EmpresaDaoImp implements EmpresaDao {

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Empresa> getEmpresas() {
        String query = "FROM Empresa"; //Empresa es el nombre de la clase, no de la tabla, hibernate_
        return entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminar(Long id) {
        Empresa empresa = entityManager.find(Empresa.class, id);
        entityManager.remove(empresa);
    }

    @Override
    public void registrar(Empresa empresa) {entityManager.merge(empresa);}

    @Override
    public void actualizar(Long id, Empresa empresa) {
        entityManager.merge(empresa);
    }

    @Override
    public Integer getIdEmpresaPorEmail(String email) {
        String query = "SELECT id FROM Empresa WHERE email = nuevaempresa@g.es";
        TypedQuery<Integer> typedQuery = entityManager.createQuery(query, Integer.class);
        //typedQuery.setParameter("email", email);

        try {
            return typedQuery.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Empresa obtenerEmpresaPorCredenciales(Empresa empresa){
        String query = "FROM Empresa WHERE email = :email";
        List<Empresa> lista = entityManager.createQuery(query)
                .setParameter("email", empresa.getEmail())
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
}
