package org.example.centro.controllers;


import org.example.centro.models.Especialidad;
import org.example.centro.models.Profesores;
import org.example.centro.repositories.ProfesoresRepository;
import org.example.centro.services.ProfesoresService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/profesores")
public class ProfesoresController {

    private ProfesoresService profesoresService;

    public ProfesoresController(ProfesoresService profesoresService) {
        this.profesoresService = profesoresService;
    }

    @GetMapping("/list")
    public List<Profesores> findAllProfesores() {
        return profesoresService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profesores> findProfesoresById(@PathVariable String id) {
        Optional<Profesores> profesores = profesoresService.findById(id);

        if(profesores.isEmpty()){
            return  ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(profesores.get());
    }

    @PostMapping("/add")
    public void addProfesores(@RequestBody Profesores profesores) {
        this.profesoresService.addProfesores(profesores);
    }

    @PutMapping("/{id}/modificar")
    public ResponseEntity<Profesores> modificarProfesores(@PathVariable String id, @RequestBody String especialidad) {

        Optional<Profesores> profesor = this.profesoresService.findById(id);

        Profesores profesorModificado = new Profesores();

        Especialidad nuevaEspecialidad;


        if(profesor.isEmpty()){
            return  ResponseEntity.notFound().build();
        }else{
            for(int i = 0; i < Especialidad.values().length; i++){
                if(Especialidad.values()[i].toString().equals(especialidad)){
                    profesorModificado = profesor.get();
                    nuevaEspecialidad = Especialidad.values()[i];
                    profesorModificado.setEspecialidad(nuevaEspecialidad);
                    this.profesoresService.modificarEspecialidadPorId(profesorModificado);
                }
            }

        }

        return ResponseEntity.ok(profesorModificado);
    }

    @DeleteMapping("/eliminar")
    public void eliminarProfesores(@RequestParam String id) {
        this.profesoresService.deleteProfesores(id);
    }
}
