package com.example.heroapiback.services;

import com.example.heroapiback.entitys.Characters;
import com.example.heroapiback.repositories.CharactersRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharactersService {

    private CharactersRepository charactersRepo;

    public CharactersService(CharactersRepository charactersRepository){
        this.charactersRepo = charactersRepository;
    }

    public List<Characters> getAllCharacters(){
        return this.charactersRepo.findAll();
    }

    public Optional<Characters> getCharacterById(int id) {
        return this.charactersRepo.findById(id);
    }
}
