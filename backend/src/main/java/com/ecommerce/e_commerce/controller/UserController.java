package com.ecommerce.e_commerce.controller;

import com.ecommerce.e_commerce.model.Users;
import com.ecommerce.e_commerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        Users user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping({ "/createuser" })
    public String Create(Model model) {
        model.addAttribute("user", new Users());
        return "crudusers";
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
    public ResponseEntity<Users> updateUser(@PathVariable Long id, @Valid @RequestBody Users userDetails) {
        Users updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    @GetMapping("/delete/{id}")
    public String eliminar(@PathVariable Long id) {
        userService.deleteUser(id);
        return "redirect:/";
    }
}
