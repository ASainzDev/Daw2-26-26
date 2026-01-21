package com.example.heroapiback.services;

import com.example.heroapiback.entitys.Powerlevels;
import com.example.heroapiback.repositories.PowerlevelsRepos;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PowerlevelsService {

    private PowerlevelsRepos powerlevelsrepo;

    public PowerlevelsService(PowerlevelsRepos powerlevelsrepo){
        this.powerlevelsrepo = powerlevelsrepo;
    }

    public Optional<Powerlevels> getPowerLevelByCharId(int id) {
        Optional<Powerlevels> powerlevels = this.powerlevelsrepo.findByCharacterId(id);

        return powerlevels;
    }
}
