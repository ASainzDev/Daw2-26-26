package com.aplicacion.weather.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="registros_meteorologicos")
public class ciudad1Entity {
    
    // Identity para que sepa que es la id, de que es auto se encarga sql
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    int registry_id;

    @Column(nullable = false)
    String nombre_ciudad;

    @Column(nullable = false)
    double temp_min;

    @Column(nullable = false)
    double temp_max;

    @Column(nullable = false)
    double temp_media;

    @Column(nullable = false)
    double viento;

    @Column(nullable = false)
    double humedad;

    @Column(nullable = false)
    LocalDate fecha;

    // El @Enumerated es para que guarde el valor del enum como string, a veces si no lo guarda como
    // número y puede dar problemas. Así además nos aseguramos que los valores sean los mismos que
    // los del enum de sql.
    @Enumerated(jakarta.persistence.EnumType.STRING)
    @Column(nullable = false)
    FenomenosAtmosfericosEnum fenomenos_atmos;

    public ciudad1Entity() {
    }

    public int getRegistry_id() {
        return registry_id;
    }

    public void setRegistry_id(int registry_id) {
        this.registry_id = registry_id;
    }

    public String getNombre_ciudad() {
        return nombre_ciudad;
    }

    public void setNombre_ciudad(String nombre_ciudad) {
        this.nombre_ciudad = nombre_ciudad;
    }

    public double getTemp_min() {
        return temp_min;
    }

    public void setTemp_min(double temp_min) {
        this.temp_min = temp_min;
    }

    public double getTemp_max() {
        return temp_max;
    }

    public void setTemp_max(double temp_max) {
        this.temp_max = temp_max;
    }

    public double getTemp_media() {
        return temp_media;
    }

    public void setTemp_media(double temp_media) {
        this.temp_media = temp_media;
    }

    public double getViento() {
        return viento;
    }

    public void setViento(double viento) {
        this.viento = viento;
    }

    public double getHumedad() {
        return humedad;
    }

    public void setHumedad(double humedad) {
        this.humedad = humedad;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public FenomenosAtmosfericosEnum getFenomenos_atmos() {
        return fenomenos_atmos;
    }

    public void setFenomenos_atmos(FenomenosAtmosfericosEnum fenomenos_atmos) {
        this.fenomenos_atmos = fenomenos_atmos;
    }

    
}
