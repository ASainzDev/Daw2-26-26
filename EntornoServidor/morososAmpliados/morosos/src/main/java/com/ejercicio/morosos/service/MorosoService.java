package com.ejercicio.morosos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ejercicio.morosos.entity.Moroso;
import com.ejercicio.morosos.entity.Estado;
import com.ejercicio.morosos.repository.MorosoRepository;

public class MorosoService {
    

    @Autowired
    private MorosoRepository morosoRepo;

    @Autowired
    private Moroso moroso;

    @Autowired
    private Estado estado;

    public List<Moroso> devolverListadoMoroso(){
        return morosoRepo.findAll();
    }

    public Moroso buscarMorosoId(Long id) {
        return morosoRepo.findById(id).orElse(null);
    }

    public void guardarMoroso(Moroso moroso) {
        morosoRepo.save(moroso);
    }

    public void updateEstadoId(Long id, String nuevoEstado) {
        moroso = morosoRepo.findById(id).orElse(null);
            
        nuevoEstado = nuevoEstado.toUpperCase();
        
    }
}
