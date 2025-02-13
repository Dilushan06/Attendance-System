package com.attendance.attendance_system_server.controller;

import com.attendance.attendance_system_server.utils.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    private final String VALID_USERNAME = "admin";
    private final String VALID_PASSWORD = "password123";

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        Map<String, String> response = new HashMap<>();

        if (VALID_USERNAME.equals(username) && VALID_PASSWORD.equals(password)) {
            String token = JwtUtil.generateToken(username);
            response.put("username", username);
            response.put("token", token);
        } else {
            response.put("error", "Invalid username or password");
        }
        return response;
    }
}
