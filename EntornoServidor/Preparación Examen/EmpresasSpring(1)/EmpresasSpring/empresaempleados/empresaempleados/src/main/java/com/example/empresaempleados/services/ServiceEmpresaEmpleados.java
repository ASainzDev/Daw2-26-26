package com.example.empresaempleados.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.empresaempleados.entity.Empleado;
import com.example.empresaempleados.entity.Empresa;
import com.example.empresaempleados.repository.EmpleadoRepository;
import com.example.empresaempleados.repository.EmpresaRepository;

@Service
public class ServiceEmpresaEmpleados {

    //Defino los autowired de los repositorys
    @Autowired
    private EmpleadoRepository empRepo;

    @Autowired
    private EmpresaRepository empreRepo;

    public boolean buscarPorID(Long empresaId) {
        return empreRepo.existsById(empresaId);
    }

    public List<Empleado> findByEmpresaId(Long empresaId) {
        return empRepo.findByEmpresaId(empresaId);
    }

    public Optional<Empleado> findById(Long id) {
        return empRepo.findById(id);
    }

    //Por alguna razón cuando declaro los método del service en el controller y luego uso la opción 
    // definir usando las herramientas de VSCode simpre difine el tipo de retorno como object. Atento 
    // a eso. Aunque en el controller ya hemos validado su existencia, aquí debo de añadir tambien
    // Optional por si devuelve algún valor null. Quizá lo mas sencillo sea quitar la evaluación del controller
    // y luego usar también el .map que se nos dió como ejemplo.
    public Optional<Empresa> findEmpresa(Long empresaId) {
        return empreRepo.findById(empresaId);
    }

    // Como desde el método que me han proporcionado en el controller se pide que este retorne un Empleado
    // habrá que hacerlo.
    public Empleado save(Empleado empleado) {
        //empRepo.save(empleado);
        //return empleado;

        //Mejor hacerlo en una linea
        return empRepo.save(empleado);
        //Esto me devuelve el objeto con la id generada. Si lo hubiese dejado como antes no devolvería la
        //id.
    }

}
