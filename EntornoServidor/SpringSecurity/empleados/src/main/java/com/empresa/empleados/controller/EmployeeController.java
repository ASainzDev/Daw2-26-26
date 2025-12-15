package com.empresa.empleados.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.empresa.empleados.dto.EmployeeDTO;
import com.empresa.empleados.services.EmployeeService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/empleados")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping("/list")
    public String list(Model model) {
        model.addAttribute("empleados", service.findAllDTOs());
        return "empleados-list";
    }

    @GetMapping("/nuevo")
    public String nuevo(Model model) {
        model.addAttribute("empleado", new EmployeeDTO());
        return "empleados-form";
    }
    @PostMapping("/save")
    public String save(@Valid @ModelAttribute("empleado") EmployeeDTO dto,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "empleados-form";
        }
        service.saveFromDTO(dto);
        return "redirect:/empleados/list";
    }

    @GetMapping("/editar/{id}")
    public String editar(@PathVariable Long id, Model model) {
        EmployeeDTO dto = service.findDTOById(id);
        model.addAttribute("empleado", dto);
        return "empleados-form";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "redirect:/empleados/list";
    }
}
