/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package com.aplicacion.weather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aplicacion.weather.entity.ciudad1Entity;

/**
 *
 * @author daw2
 */

@Repository
public interface Ciudad1Interface extends JpaRepository<ciudad1Entity, Integer>{

}
