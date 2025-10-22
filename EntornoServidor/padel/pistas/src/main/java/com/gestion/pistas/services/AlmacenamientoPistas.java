package com.gestion.pistas.services;

import java.util.ArrayList;


import com.gestion.pistas.model.Pista;

public class AlmacenamientoPistas {

    
    Pista pista;

    ArrayList<Pista> pistas = new ArrayList<Pista>();

    public void addPista(String nombre, String id){
        pista = new Pista(nombre, id);
        pistas.add(pista);
    }
    
}
