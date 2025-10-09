package com.almacenalibros.almacenalibros.repository;

import com.almacenalibros.almacenalibros.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibroRepository extends JpaRepository<Libro, Long> {
}