package com.blog.back.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Articulo {
    

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private long fechaPublicacion;
    private String titulo;
    private String url;
    private String contenido;

    public Articulo() {
    }

    public int getId() {
        return id;
    }

    public long getFechaPublicacion() {
        return fechaPublicacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getUrl() {
        return url;
    }

    public String getContenido() {
        return contenido;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFechaPublicacion(long fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }


    
}
