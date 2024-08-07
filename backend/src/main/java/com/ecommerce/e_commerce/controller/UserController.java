package com.ecommerce.e_commerce.controller;

import com.ecommerce.e_commerce.exception.ResourceNotFoundException;
import com.ecommerce.e_commerce.model.Users;
import com.ecommerce.e_commerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) throws ResourceNotFoundException {
        Users user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }


    @PostMapping("/createuser")
    public String save(@Valid Users user, BindingResult br, Model model) {
        if (br.hasErrors()) {
            return "crudusers";
        }
        userService.createUser(user);
        return "redirect:/"; 
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable Long id, @Valid @RequestBody Users userDetails) throws ResourceNotFoundException {
        Users updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    @GetMapping("/delete/{id}")
    public String eliminar(@PathVariable Long id) throws ResourceNotFoundException {
        userService.deleteUser(id);
        return "redirect:/";
    }

    @PostMapping("/login")
public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
    String email = loginRequest.get("email");
    String password = loginRequest.get("password");

    boolean isAuthenticated = userService.authenticate(email, password);
    if (isAuthenticated) {
        return ResponseEntity.ok("Inicio de sesión exitoso");
    } else {
        return ResponseEntity.status(401).body("Correo o contraseña incorrectos");
    }
}

}
