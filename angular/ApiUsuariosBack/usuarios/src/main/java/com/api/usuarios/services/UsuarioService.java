

package com.api.usuarios.services;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.api.usuarios.entity.Usuario;
import com.api.usuarios.repositories.UsuariosInterface;

/**
 *
 * @author Alejandro Sainz Sainz
 */

@Service
public class UsuarioService {

    private final UsuariosInterface uInterface;

    public UsuarioService(UsuariosInterface uInterface){
        this.uInterface = uInterface;
    }

    public List<Usuario> getAllusuarios(){
        return this.uInterface.findAll();
    }

    public Optional<Usuario> getUsuarioById(@NonNull String idUsuario){
        if(uInterface.existsById(idUsuario)){
            return uInterface.findById(idUsuario);
        }else{
            return Optional.empty();
        }
    }

}
