

package com.api.futbol.entity;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="partidos")
public class Partidos {

    @Id
    private String id = UUID.randomUUID().toString();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "equipo1_id", nullable = false)
    private Equipo equipo1;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "equipo2_id", nullable = false)
    private Equipo equipo2;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "arbitro1_id", nullable = false)
    private Arbitros arbitro1;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "arbitro2_id", nullable = false)
    private Arbitros arbitro2;

    public Partidos() {
    }

    public Partidos(Arbitros arbitro1, Arbitros arbitro2, Equipo equipo1, Equipo equipo2) {
        this.arbitro1 = arbitro1;
        this.arbitro2 = arbitro2;
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Equipo getEquipo1() {
        return equipo1;
    }

    public void setEquipo1(Equipo equipo1) {
        this.equipo1 = equipo1;
    }

    public Equipo getEquipo2() {
        return equipo2;
    }

    public void setEquipo2(Equipo equipo2) {
        this.equipo2 = equipo2;
    }

    public Arbitros getArbitro1() {
        return arbitro1;
    }

    public void setArbitro1(Arbitros arbitro1) {
        this.arbitro1 = arbitro1;
    }

    public Arbitros getArbitro2() {
        return arbitro2;
    }

    public void setArbitro2(Arbitros arbitro2) {
        this.arbitro2 = arbitro2;
    }


}
