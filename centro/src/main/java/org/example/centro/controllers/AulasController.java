package org.example.centro.controllers;

import org.example.centro.models.Aulas;
import org.example.centro.services.AulasService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/aulas")
public class AulasController {

    private AulasService aulasService;

    public AulasController(AulasService aulasService) {
        this.aulasService = aulasService;
    }

    @GetMapping("/list")
    public List<Aulas> getAulas() {
        return this.aulasService.getAllAulas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aulas> getAulasById(@PathVariable String id) {
        Optional<Aulas> aula = this.aulasService.getAulasById(id);

        if(aula.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(aula.get());
    }
}
