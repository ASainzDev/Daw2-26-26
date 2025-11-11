package com.example.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jpa.model.Futbolista;

@Repository
public interface FutbolistaRepository extends JpaRepository<Futbolista, Long> {
}