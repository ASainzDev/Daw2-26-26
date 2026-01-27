package com.example.heroapiback.entitys;

import jakarta.persistence.*;

@Entity
@Table(name = "powerstats")
public class Powerstats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "intelligence")
    private double inteligence;

    @Column(name = "strength")
    private double strength;

    @Column(name = "speed")
    private double speed;

    @Column(name = "durability")
    private double durability;

    @Column(name = "power")
    private double power;

    @Column(name = "combat")
    private double combat;

    @OneToOne
    @JoinColumn(name = "characters_id", nullable = false, unique = true)
    private Characters character;

    public Powerstats() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getInteligence() {
        return inteligence;
    }

    public void setInteligence(double inteligence) {
        this.inteligence = inteligence;
    }

    public double getStrength() {
        return strength;
    }

    public void setStrength(double strength) {
        this.strength = strength;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    public double getDurability() {
        return durability;
    }

    public void setDurability(double durability) {
        this.durability = durability;
    }

    public double getPower() {
        return power;
    }

    public void setPower(double power) {
        this.power = power;
    }

    public double getCombat() {
        return combat;
    }

    public void setCombat(double combat) {
        this.combat = combat;
    }

    public Characters getCharacter() {
        return character;
    }

    public void setCharacter(Characters character) {
        this.character = character;
    }

    public Powerstats(int id, double inteligence, double strength, double speed, double durability, double power, double combat, Characters character) {
        this.id = id;
        this.inteligence = inteligence;
        this.strength = strength;
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;
        this.character = character;
    }
}
