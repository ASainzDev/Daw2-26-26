package com.gestion.pistas.controllers;


import com.gestion.pistas.model.Pista;
import com.gestion.pistas.services.AlmacenamientoPistas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.bind.annotation.PostMapping;





@CrossOrigin
@Controller
@RequestMapping("/")

public class MainController {
    

    @Autowired
    private AlmacenamientoPistas almacenamiento;

    @GetMapping("/")
    public String mostrarPagina(Model model) {
        model.addAttribute("pistas", almacenamiento.obtenerTodasLasPistas());
        return "index";
    }

    @PostMapping("/addPista")
    public RedirectView agregarPista(
            @RequestParam String nombrePista,
            @RequestParam String horasDisponibles) {
        
        almacenamiento.addPista(nombrePista, horasDisponibles);
        return new RedirectView("/");
    }

    @GetMapping("/api/pistas")
    @ResponseBody
    public List<Pista> listarPistas() {
        return almacenamiento.obtenerTodasLasPistas();
    }
}
