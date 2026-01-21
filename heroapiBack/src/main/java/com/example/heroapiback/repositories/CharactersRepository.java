package com.example.heroapiback.repositories;

import com.example.heroapiback.entitys.Characters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharactersRepository extends JpaRepository<Characters, Integer> {

}
