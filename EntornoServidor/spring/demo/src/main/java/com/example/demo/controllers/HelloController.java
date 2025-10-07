package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/hello")
public class HelloController {
    // GET /api/hello
    @GetMapping
    public Map<String, String> hello() {
        return Map.of("message", "Hola Spring Boot");
    }

    // GET /api/hello/{name}
    @GetMapping("/{name}")
    public Map<String, String> greetByName(@PathVariable String name) {
        return Map.of("message", "Hola " + name);
    }

    // GET /api/hello/echo?msg=...
    @GetMapping("/echo")
    public Map<String, String> echo(@RequestParam(defaultValue = "sin mensaje") String msg) {
        return Map.of("echo", msg);
    }
}