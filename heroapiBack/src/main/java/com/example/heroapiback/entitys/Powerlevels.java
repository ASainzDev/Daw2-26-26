package com.example.heroapiback.entitys;

import jakarta.persistence.*;

@Entity
@Table(name = "powerlevels")
public class Powerlevels {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "overall")
    private int overall;

    @Column(name = "strength")
    private int strength;

    @Column(name = "speed")
    private int speed;

    @Column(name = "endurance")
    private int endurance;

    @Column(name = "stamina")
    private int stamina;

    @Column(name = "intelligence")
    private int intelligence;

    @OneToOne
    @JoinColumn(name = "hero_id", nullable = false, unique = true)
    private Characters character;

    public Powerlevels() {
    }

    public Powerlevels(int id, int overall, int strength, int speed, int endurance, int stamina, int intelligence, Characters character) {
        this.id = id;
        this.overall = overall;
        this.strength = strength;
        this.speed = speed;
        this.endurance = endurance;
        this.stamina = stamina;
        this.intelligence = intelligence;
        this.character = character;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOverall() {
        return overall;
    }

    public void setOverall(int overall) {
        this.overall = overall;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getEndurance() {
        return endurance;
    }

    public void setEndurance(int endurance) {
        this.endurance = endurance;
    }

    public int getStamina() {
        return stamina;
    }

    public void setStamina(int stamina) {
        this.stamina = stamina;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public Characters getCharacter() {
        return character;
    }

    public void setCharacter(Characters character) {
        this.character = character;
    }
}
