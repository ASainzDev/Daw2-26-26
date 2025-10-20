package com.gestion.pistas.controllers;


import com.gestion.pistas.services.AlmacenamientoPistas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;





@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/")

public class MainController {
    

    @Autowired
    private AlmacenamientoPistas listado;

    @PostMapping("/addPista")
    public void postMethodName(@RequestParam String nombrePista, String horasDisponibles) {
        
        listado.addPista(nombrePista, horasDisponibles);
        
    }
    
}
