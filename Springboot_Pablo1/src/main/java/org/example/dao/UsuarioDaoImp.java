package org.example.dao;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.example.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao {

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario"; //Usuario es el nombre de la clase, no de la tabla, hibernate_
       return entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminar(Long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrar(Usuario usuario) {entityManager.merge(usuario);}

    @Override
    public void actualizar(Long id, Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public Usuario obtenerUsuarioPorCredenciales(Usuario usuario){
        String query = "FROM Usuario WHERE email = :email";
         List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("email", usuario.getEmail())
                .getResultList();

         if(lista.isEmpty()){
             return null;
         }

         String passwordHashed = lista.get(0).getPassword();

         //para comparar la pass con la de la bbdd
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if(argon2.verify(passwordHashed, usuario.getPassword())){

            return lista.get(0);
        }

        return null;
    }


}
