package com.example.minitienda.controller;

import com.example.minitienda.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller

public class ProductosController {

    @Autowired
    private ListaService listaservice;

    @GetMapping("/productos")

    @ResponseBody

    public String listadoProductos() {

        return listaservice.getMilista();
    }

}
