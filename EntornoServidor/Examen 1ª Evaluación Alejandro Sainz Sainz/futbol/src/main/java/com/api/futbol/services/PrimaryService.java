
package com.api.futbol.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.futbol.entity.Arbitros;
import com.api.futbol.entity.Equipo;
import com.api.futbol.entity.Jugador;
import com.api.futbol.entity.Partidos;
import com.api.futbol.repository.ArbitrosRepository;
import com.api.futbol.repository.EquiposInterface;
import com.api.futbol.repository.JugadorRepository;
import com.api.futbol.repository.PartidosRepository;

// Me aseguro de la notación
@Service
public class PrimaryService {

    @Autowired
    private EquiposInterface equipInter;

    @Autowired
    private JugadorRepository jRepo;

    @Autowired
    private ArbitrosRepository aRepo;

    @Autowired
    private PartidosRepository pRepo;

// Metodo que llama al repositorio para obtener todos los equipos
    public List<Equipo> obtenerEquipos() {
        
        return equipInter.findAll();
    }

    // Metodo para añadir
    public void addEquipo(Equipo nuevoEquipo){
        equipInter.save(nuevoEquipo);
    }

    // Metodo para actualizar
    public void actualizarNombre(Long id, String nombre){
        // Declaro una instancia de equipo y retorno su valor mediante findById
        Equipo equipo = equipInter.findById(id).orElse(null);
        // Modifico el nombre del equipo mediante el setter
        equipo.setNombre_equipo(nombre);

        equipInter.save(equipo);
    }

    // Método del service para eliminar.
    public void eliminarEquipo(Long id) {
        equipInter.deleteById(id);
    }

    public List<Jugador> obtenerTodosJugadores() {
        return jRepo.findAll();
    }

    public List<Jugador> obtenerPlantilla(String nombre){
        
        // Con este creo que filtro
        Equipo equipos = equipInter.findAll().stream().filter(e -> e.getNombre_equipo().equals(nombre)).findFirst().orElse(null);

        Long id = equipos.getId();
        return jRepo.findByEquipoId(id);
    }

    // Cambio los optionals porque es un problema muy gordo con tanta tabla y controller.
    public Equipo findEquipo(Long equipoId) {
        return equipInter.findById(equipoId).orElse(null);
    }

    public Jugador save(Jugador jugador) {
        jRepo.save(jugador);
        return jugador;
    }

    public Jugador obtenerJugadorId(String uuid) {
        return jRepo.findById(uuid).orElse(null);
    }

    public void modificarEquipo(Jugador jugador) {
       jRepo.save(jugador);
    }

    public List<Arbitros> obtenerTodosArbitros() {
       return aRepo.findAll();
    }

    public void addArbitro(Arbitros arbitro) {
        aRepo.save(arbitro);
    }

    public List<Arbitros> retornarRol(String rol) {
        return aRepo.findAll().stream().filter(a->a.getRol().toString()
        .equals(rol)).toList();
    }

    public void deleteArbitro(String id) {
        aRepo.deleteById(id);
    }

    public void guardarPartido(Partidos partido) {
        
            pRepo.save(partido);
        
    }

    public Partidos obtenerPartido(String id) {
        return pRepo.findById(id).orElse(null);
    }
}
