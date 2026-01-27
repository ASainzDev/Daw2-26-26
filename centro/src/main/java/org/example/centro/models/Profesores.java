package org.example.centro.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name="profesores")
public class Profesores {

    @Id
    private String id_profesor = UUID.randomUUID().toString();

    @Column(name="nombre", nullable=false)
    private String nombre;

    @Column(name="apellido1", nullable = false)
    private String apellido1;

    @Column(name="apellido2", nullable = false)
    private String apellido2;

    @Enumerated(EnumType.STRING)
    @Column(name="especialidad", nullable = false)
    private Especialidad especialidad;

    public Profesores() {
    }

    public Profesores(String id_profesor, String nombre, String apellido1, String apellido2, Especialidad especialidad) {
        this.id_profesor = id_profesor;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.especialidad = especialidad;
    }

    public String getId_profesor() {
        return id_profesor;
    }

    public void setId_profesor(String id_profesor) {
        this.id_profesor = id_profesor;
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

    public Especialidad getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(Especialidad especialidad) {
        this.especialidad = especialidad;
    }
}
