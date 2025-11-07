package com.blog.back.controllers;

import java.util.List;

import com.blog.back.model.Articulo;
import com.blog.back.services.ServicioArticulos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin
@RequestMapping("/api")

public class MainController {
    

    @Autowired
    private ServicioArticulos servicioArticulos;

    @GetMapping("/articulos")
    public List<Articulo> obtenerArticulos() {
        return servicioArticulos.getArticulos();
    }

    @PostMapping("/save")
    public void postMethodName(@RequestBody Articulo articulo) {
        
        servicioArticulos.guardarArticulo(articulo);
        
    }
    
    
}
