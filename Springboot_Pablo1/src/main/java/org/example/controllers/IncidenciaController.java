package org.example.controllers;

import org.example.dao.IncidenciaDao;
import org.example.models.Incidencia;
import org.example.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IncidenciaController {
    @Autowired
    private IncidenciaDao incidenciaDao;
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/incidencias", method = RequestMethod.GET)
    public List<Incidencia> getIncidencias(@RequestHeader(value = "Authorization") String token) {
        if (!validarToken(token)) {
            return null;
        }
        return incidenciaDao.getIncidencias();
    }

   /* @RequestMapping(value = "api/incidencias/{id}", method = RequestMethod.GET)
    public Incidencia obtenerIncidenciaPorId(@RequestHeader(value = "Authorization") String token, @PathVariable Long id) {
        if (!validarToken(token)) {
            return null;
        }
        return incidenciaDao.obtenerIncidenciaPorId(id);
    }*/

    @RequestMapping(value = "api/incidencias", method = RequestMethod.POST)
    public void registrarIncidencia(@RequestHeader(value = "Authorization") String token, @RequestBody Incidencia incidencia) {
        if (!validarToken(token)) {
            return;
        }
        incidenciaDao.registrar(incidencia);
    }

    @RequestMapping(value = "api/incidencias/{id}", method = RequestMethod.DELETE)
    public void eliminarIncidencia(@RequestHeader(value = "Authorization") String token, @PathVariable Long id) {
        if (!validarToken(token)) {
            return;
        }
        incidenciaDao.eliminar(id);
    }

    @RequestMapping(value = "api/incidencias/{id}", method = RequestMethod.PUT)
    public void actualizarIncidencia(@RequestHeader(value = "Authorization") String token, @PathVariable Long id, @RequestBody Incidencia incidencia) {
        if (!validarToken(token)) {
            return;
        }
        incidenciaDao.actualizar(id, incidencia);
    }

    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }
}