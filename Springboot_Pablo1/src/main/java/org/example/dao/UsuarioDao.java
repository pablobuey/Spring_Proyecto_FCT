package org.example.dao;

import org.example.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();


    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);


    void actualizar(Long id, Usuario usuario);


}
