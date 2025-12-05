

package com.api.futbol.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="arbitros")
public class Arbitros {

    @Id
    private String id = UUID.randomUUID().toString();

    @Column(nullable=false)
    private String nombre;

    @Column(nullable=false)
    private String apellido1;

    @Column(nullable=false)
    private String apellido2;

    @Enumerated(jakarta.persistence.EnumType.STRING)
    @Column(nullable=false)
    private RolArbitro rol;

    public Arbitros() {
    }

    public Arbitros(String id, String nombre, String apellido1, String apellido2, RolArbitro rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.rol = rol;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public RolArbitro getRol() {
        return rol;
    }

    public void setRol(RolArbitro rol) {
        this.rol = rol;
    }

    
}
