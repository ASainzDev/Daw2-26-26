package com.example.minitienda.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller

public class DescriptionController {

    @GetMapping("/descripcion")

    @ResponseBody

    public String mensajeBienvenida() {
        return "Nuestra Tienda es un garito pequeñito e inmundo donde no hay nada.";
    }

}
