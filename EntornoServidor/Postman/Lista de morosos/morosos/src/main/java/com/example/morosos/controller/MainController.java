package com.example.morosos.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.morosos.model.Moroso;



@RestController
@RequestMapping("/api")

public class MainController {

    
    public ArrayList<Moroso> lista = new ArrayList<>();

    @GetMapping("/principal")
    public ArrayList<Moroso> obtenerLista() {
        return lista;
    }

    @PostMapping("/add")
    public void addMoroso(@RequestBody Moroso moroso){
        lista.add(moroso);
    }
    
    @DeleteMapping("/remove/{id}")
    public void removeMoroso(@PathVariable("id") String id){
       for (Moroso moroso : lista) {
        if(moroso.getId().equals(id)){
            lista.remove(moroso);
        }
       }
    }
}
