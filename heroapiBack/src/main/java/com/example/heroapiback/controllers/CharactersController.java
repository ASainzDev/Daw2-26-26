package com.example.heroapiback.controllers;

import com.example.heroapiback.entitys.Characters;
import com.example.heroapiback.entitys.Powerlevels;
import com.example.heroapiback.services.CharactersService;
import com.example.heroapiback.services.PowerlevelsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(
      name="Characters",
        description="Endpoints que se refieren a la información de los personajes"
)

@CrossOrigin
@RestController
@RequestMapping("/heroesapi/characters")
public class CharactersController {

    private CharactersService charService;

    private PowerlevelsService powerlevService;

    public CharactersController(CharactersService charService, PowerlevelsService powerlevService){
        this.charService = charService;
        this.powerlevService = powerlevService;
    }

    @Operation(
            summary = "Obtener todos los personajes",
            description = "Devuelve un listado de los personajes almacenados"
    )
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Petición correcta"),
            @ApiResponse(responseCode = "204", description = "Petición correcta pero no hay datos")
    })
    @GetMapping()
    public ResponseEntity<List<Characters>> getAllCharacters() {
        List<Characters> charactersList = this.charService.getAllCharacters();

        return ResponseEntity.ok(charactersList);
    }

    @Operation(
            summary = "Obtener por ID",
            description = "Obtener datos de un character por ID proporcionada en la path"
    )
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Character encontrado"),
            @ApiResponse(responseCode = "404", description = "ID del character inexistente")
    })
    @GetMapping("/{id}")
    public ResponseEntity<Characters> getCharacterById(@PathVariable int id){
        Optional<Characters> character = this.charService.getCharacterById(id);

        return character.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

    }

    @Operation(
            summary = "Mostrar powerlevels de un character",
            description = "Se muestran los powerlevels de un character proporcionando su ID en la path"
    )

    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Encontrado character y powerlevels"),
            @ApiResponse(responseCode = "404", description = "No encontrada la ID del character")
    })
    @GetMapping("/{id}/powerlevels")
    public ResponseEntity<Powerlevels> getCharacterPowerlevelsByCharId(@PathVariable int id){
        Optional<Powerlevels> powerlevel = this.powerlevService.getPowerLevelByCharId(id);

        if(powerlevel.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(powerlevel.get());
    }
}
