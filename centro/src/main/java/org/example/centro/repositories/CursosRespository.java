package org.example.centro.repositories;

import org.example.centro.models.Aulas;
import org.example.centro.models.Curso;
import org.example.centro.models.Profesores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursosRespository extends JpaRepository<Curso, String> {

}
