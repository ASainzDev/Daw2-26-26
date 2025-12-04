

package com.api.futbol.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.futbol.entity.Equipo;
import com.api.futbol.entity.Jugador;
import com.api.futbol.services.PrimaryService;



@RestController
@CrossOrigin
@RequestMapping("/jugadores")
public class JugadoresController {

    @Autowired
    private PrimaryService servicio;

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
