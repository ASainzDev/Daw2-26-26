package org.example.centro.services;

import org.example.centro.models.Aulas;
import org.example.centro.repositories.AulasRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AulasService {

    private AulasRepository aulasRepository;

    public AulasService(AulasRepository aulasRepository) {
        this.aulasRepository = aulasRepository;
    }

    public List<Aulas> getAllAulas() {
        return aulasRepository.findAll();
    }

    public Optional<Aulas> getAulasById(String id) {
        return aulasRepository.findById(id);
    }
}
