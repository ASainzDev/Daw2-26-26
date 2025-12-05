/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.api.futbol.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.futbol.entity.Partidos;
import com.api.futbol.services.PrimaryService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/partidos")
public class PartidoController {

    @Autowired
    private PrimaryService servicio;

    @PostMapping("/addPartido")
    public void addPartido(@RequestBody Partidos partido){
        servicio.guardarPartido(partido);
    }

    @GetMapping("/getPartido/{id}")
    public Partidos getMethodName(@PathVariable String id) {
        return servicio.obtenerPartido(id);
    }
    
}
