package com.example.heroapiback.entitys;

import jakarta.persistence.*;

@Entity
@Table(name="characters")
public class Characters {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="hero_name", nullable = false)
    private String heroName;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="imagen1", nullable=false)
    private String imagen1;

    @Column(name="imagen2", nullable = true)
    private String imagen2;

    @Column(name="imagen3", nullable = true)
    private String imagen3;

    @OneToOne(mappedBy = "character")
    private Powerlevels powerlevels;

    public Characters() {
    }

    public Characters(int id, String heroName, String name, String imagen1, String imagen2, String imagen3) {
        this.id = id;
        this.heroName = heroName;
        this.name = name;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHeroName() {
        return heroName;
    }

    public void setHeroName(String heroName) {
        this.heroName = heroName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImagen1() {
        return imagen1;
    }

    public void setImagen1(String imagen1) {
        this.imagen1 = imagen1;
    }

    public String getImagen2() {
        return imagen2;
    }

    public void setImagen2(String imagen2) {
        this.imagen2 = imagen2;
    }

    public String getImagen3() {
        return imagen3;
    }

    public void setImagen3(String imagen3) {
        this.imagen3 = imagen3;
    }

    public Powerlevels getPowerlevels() {
        return powerlevels;
    }

    public void setPowerlevels(Powerlevels powerlevels) {
        this.powerlevels = powerlevels;
    }
}
