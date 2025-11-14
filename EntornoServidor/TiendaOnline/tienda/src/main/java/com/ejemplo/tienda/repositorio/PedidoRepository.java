

package com.ejemplo.tienda.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ejemplo.tienda.entidad.PedidoEntity;


public interface PedidoRepository extends JpaRepository<PedidoEntity, Long>{

}
