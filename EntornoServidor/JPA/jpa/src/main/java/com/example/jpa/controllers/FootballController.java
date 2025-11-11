package com.example.jpa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.jpa.repository.EquipoRepository;
import com.example.jpa.repository.FutbolistaRepository;


@Controller

public class FootballController {
    
    @Autowired
    private EquipoRepository repoE;

    @Autowired
    private FutbolistaRepository repoF;

    @GetMapping("/equipos")
    public String ListarEquipos(Model model) {
        model.addAttribute("equipo",repoE.findAll());
        return "equipo";
    }
    

}