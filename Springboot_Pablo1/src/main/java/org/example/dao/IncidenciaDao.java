package org.example.dao;

import org.example.models.Incidencia;


import java.util.List;

public interface IncidenciaDao {

    List<Incidencia> getIncidencias();


    void eliminar(Long id);

    void registrar(Incidencia incidencia);

  //  Incidencia obtenerIncidenciaPorCredenciales(Incidencia incidencia);

    void actualizar(Long id, Incidencia incidencia);


}