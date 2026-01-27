package org.example.centro.controllers;

import org.example.centro.models.Curso;
import org.example.centro.services.CursosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/cursos")
public class CursosController {

    private CursosService cursosService;

    public CursosController(CursosService cursosService) {
        this.cursosService = cursosService;
    }

    @GetMapping("List")
    public List<Curso> getAllCursos(){
        return cursosService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@PathVariable String id){
        Optional<Curso> curso = cursosService.getById(id);

        if(curso.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(curso.get());
    }

    @PostMapping("/add")
    public void addCurso(@RequestBody Curso curso){
        this.cursosService.addCurso(curso);
    }

    @DeleteMapping("/eliminar")
    public void eliminarCurso(@RequestParam String id){
        this.cursosService.eliminarCuros(id);
    }
}
