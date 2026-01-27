package org.example.centro.services;

import org.example.centro.models.Curso;
import org.example.centro.repositories.CursosRespository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CursosService {

    private CursosRespository cursosRespository;

    public CursosService(CursosRespository cursosRespository) {
        this.cursosRespository = cursosRespository;
    }

    public List<Curso> getAll() {
        return cursosRespository.findAll();
    }

    public Optional<Curso> getById(String id) {
        return cursosRespository.findById(id);
    }

    public void addCurso(Curso curso) {
        this.cursosRespository.save(curso);
    }

    public void eliminarCuros(String id) {
        this.cursosRespository.deleteById(id);
    }
}
