package com.example.empresaempleados.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.empresaempleados.entity.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

}
