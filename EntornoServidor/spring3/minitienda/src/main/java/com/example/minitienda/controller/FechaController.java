package com.example.minitienda.controller;

import java.time.LocalDate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller

public class FechaController {

    @GetMapping("/date")

    @ResponseBody

    public String mensajeBienvenida() {
        return LocalDate.now().toString();
    }

}
