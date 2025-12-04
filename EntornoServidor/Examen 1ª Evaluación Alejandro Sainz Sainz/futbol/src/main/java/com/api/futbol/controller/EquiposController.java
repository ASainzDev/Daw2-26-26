
package com.api.futbol.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.futbol.entity.Arbitros;
import com.api.futbol.entity.Equipo;
import com.api.futbol.entity.Jugador;
import com.api.futbol.services.PrimaryService;

// Genero el primer controller. Supongo que en este caso cada entidad puede tener un controlle, ya veré como lo voy haciendo
@RestController
// No quiero problemas de cors
@CrossOrigin
// Endpoint principal
@RequestMapping("/equipos")
public class EquiposController {

    @Autowired
    private PrimaryService servicio;

    // Hago primero el getMapping para todos los equipos
    @GetMapping("/todosEquipos")
    public List<Equipo> listarEquipos(){
        return servicio.obtenerEquipos();
    }

    // Metodo Post para añadir un equipo
    @PostMapping("/addEquipo")
    public void addEquipo(@RequestBody Equipo nuevoEquipo){
        servicio.addEquipo(nuevoEquipo);
    }

    // Metodo para poder modificar el nombre de un equipo
    // Quizá podía pasar el nombre desde el cuerpo de la petición pero no me arriesgo, prefiero con @RequestParam. Creo que más fácil asegurar
    @PutMapping("/actualizarnombre/{id}")
    public void modificarRegistro( @PathVariable Long id, @RequestParam String nombre){
        servicio.actualizarNombre(id, nombre);
        
    }

    // Creo el método de eliminar un equipo
    @DeleteMapping("/eliminarEquipo/{id}")
    public void eliminarEquipo(@PathVariable Long id){
        servicio.eliminarEquipo(id);
    }

    @GetMapping("/todosArbitros")
    public List<Arbitros> getAll() {
        return servicio.obtenerTodosArbitros();
    }

    @PostMapping("/addArbitro")
    public void addArbitro(@RequestBody Arbitros arbitro){
        
        servicio.addArbitro(arbitro);
    }

    @GetMapping("/listarrol")
    public List<Arbitros> retornarRol(@RequestParam String rol) {
        return servicio.retornarRol(rol);
    }

    @DeleteMapping("/borrarArbitro/{id}")
    public void deleteArbitro(@PathVariable String id){
        servicio.deleteArbitro(id);
    }

    @GetMapping("/todosJugadores")
    public List<Jugador> obtenerTodosJugadores(){
        return servicio.obtenerTodosJugadores();
    } 

    // Obtener todos los jugadores de un equipo
    @GetMapping("/equipo/{nombre}")
    public List<Jugador> obtenerPlantilla(@RequestParam String nombre){
        return servicio.obtenerPlantilla(nombre);
    }

    // Añadir Jugadores
    @PostMapping("/addJugador")
    public ResponseEntity<Jugador> addJugador(@RequestBody Jugador jugador) {
        if(jugador.getEquipo() == null || jugador.getEquipo().getId() == null){
            return ResponseEntity.badRequest().build();
        }

        Long equipoId = jugador.getEquipo().getId();

        Equipo equipo = servicio.findEquipo(equipoId);

        if(equipo == null){
            return ResponseEntity.badRequest().build();
        }

        jugador.setEquipo(equipo);

        Jugador jugadorGuardado = servicio.save(jugador);

        URI location = URI.create("/jugadores/add/" + jugadorGuardado.getId());
        return ResponseEntity.created(location).body(jugadorGuardado);

    }

    // Editar el equipo de un jugador
    @PutMapping("editarJugador/{uuid}")
    public void editarEquipo(@PathVariable String uuid, @RequestParam Long id) {
        Jugador jugador = servicio.obtenerJugadorId(uuid);

        
        Equipo equipoNuevo = servicio.findEquipo(id);

        jugador.setEquipo(equipoNuevo);

        servicio.modificarEquipo(jugador);
    }
}
