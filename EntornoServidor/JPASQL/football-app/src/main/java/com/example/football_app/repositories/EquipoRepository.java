package com.example.football_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.football_app.model.Equipo;


@Repository
public interface EquipoRepository extends JpaRepository<Equipo, Long> {
    
}
