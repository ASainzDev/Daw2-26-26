/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package com.api.futbol.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.futbol.entity.Arbitros;

/**
 *
 * @author daw2
 */
@Repository
public interface ArbitrosRepository extends JpaRepository<Arbitros, String> {

}
