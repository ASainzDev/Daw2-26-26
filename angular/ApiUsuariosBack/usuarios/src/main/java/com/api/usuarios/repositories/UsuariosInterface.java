

package com.api.usuarios.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.usuarios.entity.Usuario;

/**
 *
 * @author Alejandro Sainz Sainz
 */

@Repository
public interface UsuariosInterface extends JpaRepository<Usuario, String> {

}
