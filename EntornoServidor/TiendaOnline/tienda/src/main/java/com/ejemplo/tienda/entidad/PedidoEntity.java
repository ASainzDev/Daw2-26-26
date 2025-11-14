

package com.ejemplo.tienda.entidad;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PedidoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable=false)
    String nombre_cliente;

    @Column(nullable = false)
    LocalDateTime fecha_pedido;

    @Column(nullable = false)
    double importe_total;

    @Column(nullable = false)
    String estado;

    public String getId;
    

    public PedidoEntity(){

    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getNombre_cliente() {
        return nombre_cliente;
    }


    public void setNombre_cliente(String nombre_cliente) {
        this.nombre_cliente = nombre_cliente;
    }


    public LocalDateTime getFecha_pedido() {
        return fecha_pedido;
    }


    public void setFecha_pedido(LocalDateTime fecha_pedido) {
        this.fecha_pedido = fecha_pedido;
    }


    public double getImporte_total() {
        return importe_total;
    }


    public void setImporte_total(double importe_total) {
        this.importe_total = importe_total;
    }


    public String getEstado() {
        return estado;
    }


    public void setEstado(String estado) {
        this.estado = estado;
    }

    
}
