/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.api.futbol.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.futbol.entity.Arbitros;
import com.api.futbol.services.PrimaryService;



@RestController
@RequestMapping("/arbitros")
public class ArbitrosController {

    @Autowired
    private PrimaryService servicio;

    @GetMapping("/todosArbitros")
    public List<Arbitros> getAll() {
        return servicio.obtenerTodosArbitros();
    }

    @PostMapping("/addArbitro")
    public void addArbitro(@RequestBody Arbitros arbitro){
        
        servicio.addArbitro(arbitro);
    }

    @GetMapping("/listarrol")
    public List<Arbitros> retornarRol(@RequestParam String rol) {
        return servicio.retornarRol(rol);
    }

    @DeleteMapping("/borrarArbitro/{id}")
    public void deleteArbitro(@PathVariable String id){
        servicio.deleteArbitro(id);
    }
    

}
