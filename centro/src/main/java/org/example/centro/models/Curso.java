package org.example.centro.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name="cursos")
public class Curso {

    @Id
    private String idCurso = UUID.randomUUID().toString();

    @Column(name="nombre", nullable=false)
    private String nombre;

    @Column(name="num_horas", nullable = false)
    private int numHoras;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="id_profesor", nullable = false)
    private Profesores profesores;

    @OneToOne
    @JoinColumn(name="id_aula", nullable = false)
    private Aulas aulas;

    public Curso() {
    }

    public Curso(String idCurso, String nombre, int numHoras, Profesores profesores, Aulas aulas) {
        this.idCurso = idCurso;
        this.nombre = nombre;
        this.numHoras = numHoras;
        this.profesores = profesores;
        this.aulas = aulas;
    }

    public String getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(String idCurso) {
        this.idCurso = idCurso;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getNumHoras() {
        return numHoras;
    }

    public void setNumHoras(int numHoras) {
        this.numHoras = numHoras;
    }

    public Profesores getProfesores() {
        return profesores;
    }

    public void setProfesores(Profesores profesores) {
        this.profesores = profesores;
    }

    public Aulas getAulas() {
        return aulas;
    }

    public void setAulas(Aulas aulas) {
        this.aulas = aulas;
    }
}
