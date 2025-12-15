package com.empresa.empleados.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empresa.empleados.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
