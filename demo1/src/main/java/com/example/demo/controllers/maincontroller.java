package com.example.demo.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/")
public class maincontroller {

    @GetMapping("/Saludo")
    public String getSaludo() {
        return "Hola desde el back";
    }

    @GetMapping("Despedida")
    public String getDespedida() {
        return "Adios desde el back";
    }
}
