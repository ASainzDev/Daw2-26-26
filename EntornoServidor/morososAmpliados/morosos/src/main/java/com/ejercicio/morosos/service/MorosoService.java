package com.ejercicio.morosos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ejercicio.morosos.entity.Moroso;
import com.ejercicio.morosos.entity.Estado;
import com.ejercicio.morosos.repository.MorosoRepository;

@Service
public class MorosoService {
    

    @Autowired
    private MorosoRepository morosoRepo;


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
        Moroso moroso = morosoRepo.findById(id).orElse(null);

        Estado estado = Estado.valueOf(nuevoEstado.toUpperCase());
        moroso.setEstado_pago(estado);

        morosoRepo.save(moroso);
            
        
        
    }
}
