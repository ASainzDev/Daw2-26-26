package com.blog.back.services;

import java.util.List;
import com.blog.back.model.Articulo;
import com.blog.back.repositories.RepositorioDatos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicioArticulos {
    
    @Autowired
    RepositorioDatos repositorioDatos;


    public List<Articulo> getArticulos() {
        return repositorioDatos.findAll();
    }

    public void guardarArticulo(Articulo articulo) {
        repositorioDatos.save(articulo);
    }
}
