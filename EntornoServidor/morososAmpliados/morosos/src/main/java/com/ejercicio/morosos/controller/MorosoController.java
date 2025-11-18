package com.ejercicio.morosos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ejercicio.morosos.entity.Moroso;
import com.ejercicio.morosos.service.MorosoService;

@RestController
@RequestMapping("/morosos")
public class MorosoController {


    @Autowired
    private MorosoService morosoService;

    public MorosoController(MorosoService morosoService) {
        this.morosoService = morosoService;
    }

    @GetMapping
    public List<Moroso> getAll() {
        return morosoService.devolverListadoMoroso();
    }

    @GetMapping("/{id}")
    public Moroso getById(@PathVariable Long id) {
        return morosoService.buscarMorosoId(id);
    }

    @PostMapping
    public void create(@RequestBody Moroso moroso) {
        morosoService.guardarMoroso(moroso);
    }
// PUT -> solo actualizar estado de pago

    @PutMapping("/{id}/estado")
    public void updateEstado(
            @PathVariable Long id,
            @RequestBody String nuevoEstado) {
        morosoService.updateEstadoId(id, nuevoEstado);
    }
}
