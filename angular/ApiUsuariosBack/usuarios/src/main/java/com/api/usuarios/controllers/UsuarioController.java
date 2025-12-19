/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.api.usuarios.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.usuarios.entity.Usuario;
import com.api.usuarios.services.UsuarioService;

/**
 *
 * @author daw2
 */

@RestController
@RequestMapping("/api/users")
public class UsuarioController {

    private final UsuarioService uService;

    public UsuarioController(UsuarioService uService){
        this.uService = uService;
    }

    @GetMapping("/all")
    public List<Usuario> obtenerTodos(){
        return this.uService.getAllusuarios();
    }

    @GetMapping("{idUsuario}")
    public ResponseEntity<Usuario> obetenerPorId(@PathVariable("idUsuario") String idUsuario){
        
        if (idUsuario == null || idUsuario.isBlank()) {
            return ResponseEntity.badRequest().build();
        }

        return uService.getUsuarioById(idUsuario)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());

    }
}
