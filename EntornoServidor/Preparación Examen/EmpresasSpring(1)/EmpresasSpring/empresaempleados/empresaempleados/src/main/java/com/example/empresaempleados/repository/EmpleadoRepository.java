package com.example.empresaempleados.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.empresaempleados.entity.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {

    //Importante para el examen. Hay métodos que no aparecen en los que te proporciona el repository
    //por defecto. Por eso, si queremos filtrar de alguna forma especial, debemos de añadir métodos en 
    //el repository correspondiente. Si yo quisiera filtrar, por poner un ejemplo, por nombre de empresa
    // y no por el id, también tendría que añadir aquí un método.
    // Hay que tener cuidado con los nombres de los métodos por jerarquia. Primero el nombre de la entity
    // después el nombre del campo o atributo. No es lo mismo findByNombreEmpresa(mal) que 
    // findByEmpresaNombre(bien). JPA lo interpreta después de forma automática.
    // Spring Data construye la query automáticamente. Esto es el equivalente a SELECT * FROM empresa
    // WHERE id = ?
    // https://docs.spring.io/spring-data/jpa/reference/
    // https://www.baeldung.com/spring-data-derived-queries
    //JPA admite que se puedan agregar ciertas clausulas a los nombres de los métodos para consultas
    // sencillas. Ejemplo List<Empleado> findByEmpresaIdOrderByNombreAsc(Long empresaId);
    // Cuando se ejecuta la función en el back, si nos fijamos en la terminal en bash, podemos ver
    //como genera la query que buscamos.
    List<Empleado> findByEmpresaId(Long empresaId);
}
