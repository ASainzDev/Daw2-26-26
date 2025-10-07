package com.example.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/tools")
public class ToolsController {
    // GET /api/tools/ping
    @GetMapping("/ping")
    public Map<String, String> ping() {
        return Map.of("status", "ok");
    }

    // POST /api/tools/uppercase (body: { "text": "hola" })
    @PostMapping("/uppercase")
    public ResponseEntity<Map<String, String>> toUpper(@RequestBody Map<String, String> body) {
        String text = body.getOrDefault("text", "");
        if (text.isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "El campo 'text' es obligatorio"));
        }
        return ResponseEntity.ok(Map.of("result", text.toUpperCase()));
    }
}