package com.gestion.pistas.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.pistas.model.Pista;

@Service
public class AlmacenamientoPistas {

    
    Pista pista;

    private ArrayList<Pista> pistas = new ArrayList<Pista>();

    public void addPista(String nombre, String id){
        pista = new Pista(nombre, id);
        pistas.add(pista);
    }

    public List<Pista> obtenerTodasLasPistas() {
        return new ArrayList<>(pistas);
    }
    
}
