package com.almacenalibros.almacenalibros.controller;

import com.almacenalibros.almacenalibros.model.Libro;
import com.almacenalibros.almacenalibros.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/libros")
public class LibroController {
    @Autowired
    private LibroService libroService;

    // Obtener la lista completa de libros
    @GetMapping
    public List<Libro> obtenerTodosLosLibros() {
        return libroService.obtenerTodosLosLibros();
    }

    // Obtener un libro específico por ID
@GetMapping("/{id}")
public Optional<Libro> obtenerLibroPorId(@PathVariable Long id) {
return libroService.obtenerLibroPorId(id);
}

    // Alquilar un libro por ID (cambiar el estado a "alquilado")
    @PutMapping("/alquilar/{id}")
    public Libro alquilarLibro(@PathVariable Long id) {
        return libroService.alquilarLibro(id);
    }
}