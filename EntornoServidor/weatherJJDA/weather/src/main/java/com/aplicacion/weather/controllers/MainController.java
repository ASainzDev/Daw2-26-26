package com.aplicacion.weather.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacion.weather.services.Ciudad1Service;


@RestController
@RequestMapping("/")
public class MainController {
    
    @Autowired
    private Ciudad1Service service1;

    @GetMapping("/all")
    public List<String> getAll() {
        // Lo que hay que hacer aquí es llamar al service de cada ciudad, si las hay y añadir cada una a un array
        ArrayList<String> listadoCiudades = new ArrayList();


        return listadoCiudades;
    }
    
}
