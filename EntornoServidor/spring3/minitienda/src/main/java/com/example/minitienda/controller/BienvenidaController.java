package com.example.minitienda.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller

public class BienvenidaController {

    @GetMapping("/bienvenida")
    
    @ResponseBody

    public String mensajeBienvenida(){
        return "Bienvenido a la minitienda";
    }
    
}
