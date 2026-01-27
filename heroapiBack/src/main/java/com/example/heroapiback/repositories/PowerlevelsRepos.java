package com.example.heroapiback.repositories;

//import com.example.heroapiback.entitys.Powerlevels;
import com.example.heroapiback.entitys.Powerstats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PowerlevelsRepos extends JpaRepository<Powerstats, Integer> {
    Optional<Powerstats> findByCharacterId(int id);
}
