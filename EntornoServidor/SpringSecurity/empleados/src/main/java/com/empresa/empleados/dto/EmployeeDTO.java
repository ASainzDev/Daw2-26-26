package com.empresa.empleados.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public class EmployeeDTO {
// En formularios de edición necesitamos el id, pero no obligatoriamente

    private Long id;
    @NotBlank(message = "El nombre no puede estar vacío")
    private String nombre;
    @NotBlank(message = "El email no puede estar vacío")
    @Email(message = "El email no tiene un formato válido")
    private String email;
    @NotNull(message = "El salario no puede ser null")
    @PositiveOrZero(message = "El salario no puede ser negativo")
    private Double salario;

    public EmployeeDTO() {
    }

    public EmployeeDTO(Long id, String nombre, String email, Double salario) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.salario = salario;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }
}
