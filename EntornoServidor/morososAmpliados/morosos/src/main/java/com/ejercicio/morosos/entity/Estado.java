

package com.ejercicio.morosos.entity;


public enum Estado {
    PENDIENTE("PENDIENTE"), PAGADO("PAGADO");

    private String estado;

    Estado(String estado){
        this.estado = estado;
    }

    public String getEstado(){
        return estado;
    }
}
