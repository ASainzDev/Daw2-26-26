package org.example.centro.services;

import org.example.centro.models.Profesores;
import org.example.centro.repositories.ProfesoresRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesoresService {

    private ProfesoresRepository profesoresRepository;

    public ProfesoresService(ProfesoresRepository profesoresRepository) {
        this.profesoresRepository = profesoresRepository;
    }

    public List<Profesores> findAll() {
        return profesoresRepository.findAll();
    }

    public Optional<Profesores> findById(String id) {
        return profesoresRepository.findById(id);
    }

    public void addProfesores(Profesores profesores) {
        profesoresRepository.save(profesores);
    }

    public void modificarEspecialidadPorId(Profesores profesores) {
        profesoresRepository.save(profesores);
    }

    public void deleteProfesores(String id) {
        profesoresRepository.deleteById(id);
    }
}
