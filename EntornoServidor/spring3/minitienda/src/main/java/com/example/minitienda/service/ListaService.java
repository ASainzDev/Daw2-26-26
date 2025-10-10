package com.example.minitienda.service;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ListaService {
    
    private ArrayList<String> milista = new ArrayList<String>();


    public String getMilista() {
        milista.add("Pan");
        milista.add("Bollycao");
        milista.add("Chetos");
        return milista.toString();
    }

    public String toString (ArrayList<String> listadeproductos){
            
        String resultado = "";

        for(int i = 0; i < listadeproductos.size(); i++){
            resultado += listadeproductos.get(i);
        }

        return resultado;
    }

}

