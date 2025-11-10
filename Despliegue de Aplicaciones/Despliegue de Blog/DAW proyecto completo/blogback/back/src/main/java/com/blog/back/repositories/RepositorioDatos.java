package com.blog.back.repositories;

import com.blog.back.model.Articulo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioDatos extends JpaRepository<Articulo, Integer> {
    
}
