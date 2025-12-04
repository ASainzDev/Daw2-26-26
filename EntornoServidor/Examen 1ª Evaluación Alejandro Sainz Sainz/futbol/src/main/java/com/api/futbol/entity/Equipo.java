
package com.api.futbol.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Lo primero es crear la primera entity, sin esto no hay manera.

// Notación
@Entity
@Table(name="equipos")
public class Equipo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    // Por comodidad uso los mismos nombres que en sql, en snake_case, que no es de java, pero así me aseguro de que los nombres coincidan con los de las tablas
    @Column(nullable = false)
    private String nombre_equipo;

    @Column(nullable=false)
    private String sede;


    // Genero constructor vacio y getters y setters

    public Equipo(){
        
    }
    public Equipo(Long id, String nombre_equipo, String sede) {
        this.id = id;
        this.nombre_equipo = nombre_equipo;
        this.sede = sede;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getNombre_equipo() {
        return nombre_equipo;
    }


    public void setNombre_equipo(String nombre_equipo) {
        this.nombre_equipo = nombre_equipo;
    }


    public String getSede() {
        return sede;
    }


    public void setSede(String sede) {
        this.sede = sede;
    }
    
    
    
}
