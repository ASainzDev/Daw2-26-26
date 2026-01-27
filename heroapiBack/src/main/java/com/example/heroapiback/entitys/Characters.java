package com.example.heroapiback.entitys;

import jakarta.persistence.*;

@Entity
@Table(name="characters")
public class Characters {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="heroname", nullable = false)
    private String heroName;

    @Column(name="fullname", nullable = false)
    private String name;

    @Column(name="image1", nullable=false)
    private String imagen1;

    @Column(name="image2", nullable = true)
    private String imagen2;

    @Column(name="image3", nullable = true)
    private String imagen3;

    @Column(name="gender")
    private String gender;

    @Column(name = "race")
    private String race;

    @Column(name = "alignment")
    private String alignment;

    @OneToOne(mappedBy = "character")
    private Powerstats powerlevels;

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

<<<<<<< HEAD
    public Powerlevels getPowerlevels() {
        return powerlevels;
    }

    public void setPowerlevels(Powerlevels powerlevels) {
        this.powerlevels = powerlevels;
=======
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getAlignment() {
        return alignment;
    }

    public void setAlignment(String alignment) {
        this.alignment = alignment;
>>>>>>> 4570a0b (Docs)
    }
}
