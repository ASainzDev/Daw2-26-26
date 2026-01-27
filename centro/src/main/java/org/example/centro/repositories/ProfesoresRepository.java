package org.example.centro.repositories;

import jakarta.persistence.Entity;
import org.example.centro.models.Profesores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesoresRepository extends JpaRepository<Profesores,String> {
}
