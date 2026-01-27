package org.example.centro.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name="aulas")
public class Aulas {

    @Id
    private String idAula = UUID.randomUUID().toString();

    @Column(name="nombre", nullable = false)
    private String nombre;

    @Column(name="capacidad", nullable = false)
    private int capacidad;

    public Aulas() {
    }

    public Aulas(String idAula, String nombre, int capacidad) {
        this.idAula = idAula;
        this.nombre = nombre;
        this.capacidad = capacidad;
    }

    public String getIdAula() {
        return idAula;
    }

    public void setIdAula(String idAula) {
        this.idAula = idAula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }
}
