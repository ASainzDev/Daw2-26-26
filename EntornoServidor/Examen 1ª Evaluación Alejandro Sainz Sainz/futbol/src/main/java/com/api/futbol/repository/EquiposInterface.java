

package com.api.futbol.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.futbol.entity.Equipo;

// Lo primero la notación
@Repository
// A diferencia de otras veces como el UUID es de tipo String aquí tiene que ser de tipo String. Por ahora, al principio no me preocupo de las relaciones.
// Esta va a ser mi primera prueba
public interface EquiposInterface extends JpaRepository<Equipo, Long> {

}
