package com.empresa.empleados.mapper;

import com.empresa.empleados.dto.EmployeeDTO;
import com.empresa.empleados.model.Employee;

public class EmployeeMapper {
// DTO -> Entity

    public static Employee toEntity(EmployeeDTO dto) {
        Employee e = new Employee();
        e.setId(dto.getId());
        e.setNombre(dto.getNombre());
        e.setEmail(dto.getEmail());
        e.setSalario(dto.getSalario());
        return e;
    }
// Entity -> DTO
public static EmployeeDTO toDTO(Employee e) {
        return new EmployeeDTO(
                e.getId(),
                e.getNombre(),
                e.getEmail(),
                e.getSalario()
        );
    }
}
