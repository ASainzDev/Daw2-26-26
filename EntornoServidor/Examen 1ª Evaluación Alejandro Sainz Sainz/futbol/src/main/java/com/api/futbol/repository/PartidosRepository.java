/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package com.api.futbol.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.futbol.entity.Arbitros;
import com.api.futbol.entity.Jugador;
import com.api.futbol.entity.Partidos;


public interface PartidosRepository extends JpaRepository<Partidos, String> {
    List<Jugador> findByEquipo1Id(Long equipoId);
    List<Jugador> findByEquipo2Id(Long equipoId);
    List<Arbitros> findByArbitro1Id(String arbitroId);
    List<Arbitros> findByArbitro2Id(String arbitroId);
    
}
