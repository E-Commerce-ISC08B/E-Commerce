package com.ecommerce.e_commerce.controller;

import com.ecommerce.e_commerce.exception.ResourceNotFoundException;
import com.ecommerce.e_commerce.model.Product;
import com.ecommerce.e_commerce.model.Users;
import com.ecommerce.e_commerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
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
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
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
        try {
            return ResponseEntity.ok(userService.updateUser(id, userDetails));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/delete/{id}")
    public String eliminar(@PathVariable Long id) throws ResourceNotFoundException {
      if (id > 0) {
        userService.deleteUser(id);
      }
      return "Usuario borrado con exito.";
    }
}
