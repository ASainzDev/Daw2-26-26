
package com.api.futbol.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.futbol.entity.Jugador;

@Repository
public interface JugadorRepository extends JpaRepository<Jugador, String>{

    // Como el Ejemplo que se nos dió este es para obtener por ID
    List<Jugador> findByEquipoId(Long equipoId);

    
}
